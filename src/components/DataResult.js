import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utilities/colors';

const DataResult = props => {
  const {title, value} = props;
  return (
    <View style={styles.value}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default DataResult;

const styles = StyleSheet.create({
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.SECONDARY,
  },
  text: {
    fontSize: 18,
  },
});
