import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';

import ShowName from './components/ShowName';
import ADDpage from './components/ADDpage';
import Logo from './components/Logo';

export default function App() {
  const [namesList, setNamesList] = useState([]);
  const [isaAddMode, setIsAddMode] = useState(false);


  const ADDGoal = enteredVal => {
    if( enteredVal.length === 0 )
      return;

    setNamesList(currentName => 
      [...currentName, {id: Math.random().toString(), value: enteredVal}])
      setIsAddMode(false);
  };
  const RemoveGoal = removeVal => {
    setNamesList(currentName => {
      return currentName.filter((rval) => rval.id !== removeVal);
    });
  };


 const CANCELAddMode = () => {
  setIsAddMode(false);

 }
  return (
    <View style={styles.screen}>

      <Logo />
      <Button title="add task" onPress = { ()=> setIsAddMode(true)} />

      <ADDpage visible= {isaAddMode} onADDGoal= {ADDGoal} onCancel={CANCELAddMode} />

        <FlatList 
          keyExtractor= {(item, index) => item.id}
          data= {namesList}
          renderItem= {itemddata => <ShowName id={itemddata.item.id} onDelete={RemoveGoal} title={itemddata.item.value} />}
        />


    </View>

  );
};

const styles = StyleSheet.create({

  screen: {
    backgroundColor: '#00bfff'
  }
});


