import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../utilities/colors';

const Footer = ({calculate}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.SECONDARY,
    padding: 15,
    borderRadius: 20,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.WHITE,
  },
});
