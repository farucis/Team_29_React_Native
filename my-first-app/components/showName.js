import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const showName = props => {

    return (
        <View style = {styles.ListItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ListItem: {
      padding:10,
      marginVertical: 10, 
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});

export default showName;