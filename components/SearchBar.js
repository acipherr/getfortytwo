import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SearchBar = () => {
  return <View style={styles.container}>
    <Image source={require('../assets/searchicon.png')} style={{width:22,height:18}}/>
    <Text style={{color:"#C4C4C4",fontSize:17,fontWeight:"400"}}>Restaurant name, cuisine, or a dish...</Text>

  </View>;
};

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        borderColor:"#C4C4C4",
        borderRadius:10,
        width:"90%",
        borderWidth:1,
        padding:10,
        marginHorizontal:15,
        marginTop:"10%",
        justifyContent:"space-evenly"
    }
})

export default SearchBar;
