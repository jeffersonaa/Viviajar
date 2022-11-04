import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

function Card({ children}) {
  return <View style={styles.container}>
      {children}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 5,
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: "#fff",
        marginBottom: 10,
    }
    
  });

export default Card;