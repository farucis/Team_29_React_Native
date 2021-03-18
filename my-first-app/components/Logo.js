import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const Logo = props => {

    return(

    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello My First App!</Text>
      </View>

      <View
        style={{
          marginVertical: 15, 
          padding:30,
          flexDirection: "row",
          height: 100
          }}>
        <View style={{ backgroundColor: "blue", flex: 0.5 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <View style={{ backgroundColor: "green", flex: 0.5 }} />

      </View>

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

export default Logo;
