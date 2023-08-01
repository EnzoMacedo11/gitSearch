import { StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";
import Header from "../../components/header";

export default function Home() {
  const [name, setName] = useState<string>("");
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.inputName}> Digite o Nome do Usuário</Text>
      <TextInput onChangeText={setName} value={name} placeholder="..." />
    </View>
  );



}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

  inputName:{
    fontSize:18,
    fontWeight:"600",
    color:"#000000"
  }

})
