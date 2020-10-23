import * as React from 'react';
import { Image, Text,TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [value, onChangeText] = React.useState('Enter quantity');
  return (
    <View style={styles.container}>
         <Image style={styles.container,{width: 275, height: 362,}} source={require('assets/ACValhalla.jpg')} />
         <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <TouchableOpacity onPress={() => alert('Order Placed Successfully')} style={styles.button}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   button: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: "center",

  }, 
});