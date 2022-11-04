import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const Search = ({ change }) => {
    const [ inputValue, setInputValue ] = useState("");

  return <View style={styles.view}>
    <Text style={styles.label}>Buscar</Text>
    <TextInput 
    style={styles.input}
    placeholder="Digite o que deseja buscar"
    onChangeText={text => change(text)}
    />
  </View>;
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: "100%"
    },
    view: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontWeight: "bold",
        alignSelf: "flex-start"
    }
  });

export default Search;