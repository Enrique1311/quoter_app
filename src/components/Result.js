import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import DataResult from './DataResult';
import colors from '../utilities/colors';

const Result = props => {
  const {errorMessage, capital, interest, months, total} = props;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {total && (
        <View style={styles.result}>
          <Text style={styles.title}>Resumen</Text>
          <DataResult title="Cantidad solicitada:" value={`$ ${capital}`} />
          <DataResult title="Interés:" value={`${interest} %`} />
          <DataResult title="Plazo:" value={`${months} meses`} />
          <DataResult
            title="Valor cada cuota:"
            value={`$ ${total.monthlyFee}`}
          />
          <DataResult
            title="Total a pagar:"
            value={`$ ${total.totalPayable}`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </ScrollView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 85,
  },
  result: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.SECONDARY,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  error: {
    marginHorizontal: 10,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});
