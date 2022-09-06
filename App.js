import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View, StatusBar} from 'react-native';
import colors from './src/utilities/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

const App = () => {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    capital && interest && months ? calculate() : reset();
  }, [capital, interest, months]);

  const calculate = () => {
    reset();
    if (!capital.match(/^[0-9]+$/)) {
      setErrorMessage('¡El capital debe ser un valor numérico sin centavos!');
    } else if (!interest.match(/^\d{1,3}(\.\d{1,3})?$/)) {
      setErrorMessage(
        '¡El interés debe ser un valor numérico con hasta tres decimales separado por un punto!',
      );
    } else if (months) {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY} />
      <SafeAreaView style={styles.safe}>
        <View style={styles.background} />
        <Text style={styles.title}>Cotizador de préstamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
          months={months}
          setErrorMessage={setErrorMessage}
        />
      </SafeAreaView>
      <Result
        errorMessage={errorMessage}
        capital={capital}
        interest={interest}
        months={months}
        total={total}
      />
      <Footer />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: {
    height: 220,
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.PRIMARY,
    position: 'absolute',
    zIndex: -1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.WHITE,
    marginTop: 20,
  },
});
