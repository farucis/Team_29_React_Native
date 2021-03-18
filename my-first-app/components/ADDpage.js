import React, { useState }from 'react';
import { Button, TextInput, View, StyleSheet, Modal} from 'react-native';


const ADDpage = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputhandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addhandler = () => {
        props.onADDGoal(enteredGoal);
        setEnteredGoal('');
    } 
    
    return(
        <Modal visible={props.visible} animationType= "slide">
            <View style={styles.Button1}>
                <TextInput placeholder="First Name"
                            onChangeText = {inputhandler} 
                            value = {enteredGoal} 
                            style={styles.textinput
                            } />
                <View style={styles.ButtonsSty}>
                    <View style={styles.butt} >
                    <Button title="ADD" onPress = {addhandler} />
                    </View>
                    <View style={styles.butt} >
                    <Button title="CANCEL" color="red" onPress= {props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({

    textinput:{
      width: '80%' ,
      borderBottomColor:'black',
      borderWidth: 1,
      padding:10,
      marginBottom:10

    },
    Button1:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'

    },
    ButtonsSty:{
        flexDirection:'row',
        width: '60%' ,
        justifyContent: 'space-between'

    },
    butt:{
        width:'40%'
    }
    
});

export default ADDpage;
