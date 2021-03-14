import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';

import showName from './components/showName';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [namesList, setNamesList] = useState([]);


  const inputhandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const ADDGoal = () => {
    setNamesList(currentName => [...currentName, {id: Math.random().toString(), value: enteredGoal}])
  }


  return (
    <View style={{ backgroundColor: '#00bfff'}}>

      <View style={styles.container}>
        <Text style={styles.title}>Hello My First App!</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', padding:50}}>
        <TextInput placeholder="First Name" onChangeText = {inputhandler} value = {enteredGoal} style={{width: '70%' ,borderBottomColor:'black', borderWidth: 1, padding:10}} />
        <Button title="ADD" onPress = {ADDGoal} />
      </View>

      <View
        style={{
          padding:30,
          flexDirection: "row",
          height: 100
          }}>
        <View style={{ backgroundColor: "blue", flex: 0.5 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <View style={{ backgroundColor: "green", flex: 0.5 }} />

      </View>


        <FlatList 
          keyExtractor= {(item, index) => item.id}
          data= {namesList}
          renderItem= {itemddata => <showName title={itemddata.item.value} />}
        />


    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    padding:20,
    marginVertical: 15, 
    flex: 1
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  }
});


