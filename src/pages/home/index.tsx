import { Text, TextInput, View } from "react-native";
//import Header from "../../components/header";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  return (
    <View>
      <Text> Digite o Nome do Usuário</Text>
      <TextInput onChangeText={setName} value={name} placeholder="..." />
    </View>
  );
}
