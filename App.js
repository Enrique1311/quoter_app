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
    if (!capital) {
      setErrorMessage('No fue ingresado el capital');
    } else if (!interest) {
      setErrorMessage('No fue ingresado el interés');
    } else if (!months) {
      setErrorMessage('No fue ingresado el plazo');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
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
        <Text style={styles.title}>Cotizador</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
          months={months}
        />
      </SafeAreaView>
      <Result
        errorMessage={errorMessage}
        capital={capital}
        interest={interest}
        months={months}
        total={total}
      />
      <Footer calculate={calculate} reset={reset} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: {
    height: 230,
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
