import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import colors from '../utilities/colors';
import {Picker} from '@react-native-picker/picker';

const Form = props => {
  const {setCapital, setInterest, setMonths, months} = props;

  return (
    <View style={styles.form}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContent}>
          <Text style={styles.inputSymbol}>$</Text>
          <TextInput
            placeholder="Interés"
            keyboardType="numeric"
            style={styles.input}
            onChange={e => setCapital(e.nativeEvent.text)}
          />
        </View>
        <View style={[styles.inputContent, styles.secondInputContent]}>
          <TextInput
            placeholder="Interés"
            keyboardType="numeric"
            style={styles.input}
            onChange={e => setInterest(e.nativeEvent.text)}
          />
          <Text style={styles.inputSymbol}>%</Text>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          prompt="Selecciona el plazo"
          selectedValue={months}
          style={styles.pickerContent}
          onValueChange={value => setMonths(value)}>
          <Picker.Item label="3 meses" value={3} />
          <Picker.Item label="6 meses" value={6} />
          <Picker.Item label="12 meses" value={12} />
          <Picker.Item label="24 meses" value={24} />
          <Picker.Item label="36 meses" value={36} />
          <Picker.Item label="48 meses" value={48} />
          <Picker.Item label="60 meses" value={60} />
        </Picker>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.SECONDARY,
    paddingHorizontal: 30,
    borderRadius: 30,
    height: 160,
    width: '90%',
    justifyContent: 'center',
  },
  inputsContainer: {
    flexDirection: 'row',
  },
  inputContent: {
    height: 45,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondInputContent: {
    width: '40%',
    marginLeft: 5,
  },
  inputSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: '100%',
    width: '75%',
    fontSize: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
  pickerContainer: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.WHITE,
  },
  pickerContent: {
    width: '80%',
  },
});
