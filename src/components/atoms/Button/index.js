import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const index = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        backgroundColor: '#C238CE',
        paddingVertical: 15,
        borderRadius: 40,
    },
    labelButton: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '700',
    },
});

export default index;