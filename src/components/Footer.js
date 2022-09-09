import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../utilities/colors';

const Footer = ({setResetAll}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => setResetAll(true)}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY,
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.WHITE,
  },
  touchableOpacity: {
    width: '60%',
    height: 50,
    backgroundColor: colors.SECONDARY,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
