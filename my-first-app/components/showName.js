import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const ShowName = props => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)} >
            <View style = {styles.ListItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    ListItem: {
      padding:10,
      marginVertical: 10, 
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});

export default ShowName;
