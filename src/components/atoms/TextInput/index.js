import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

const TextInput = ({label, placeholder, ...rest}) => {
    return (
        <View>
        <Text style={styles.labelInput}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
        </View>
    );
};

const styles = StyleSheet.create({
    labelInput: {
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingLeft: 15,
    paddingVertical: 15,
  },
});

export default TextInput;
