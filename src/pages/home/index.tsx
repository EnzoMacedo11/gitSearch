import styled from "styled-components/native";

import { useContext, useState } from "react";
import Header from "../../components/header";
import axios from "axios";
import { Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/userContext";

interface GitUser {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  id: number;
  followers: number;
  public_repos: number;
}

export default function Home() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const {setUserList} = useContext(UserContext)
  const [user, setUser] = useState<GitUser>({
    avatar_url: "",
    name: "",
    login: "",
    location: "",
    id: 0,
    followers: 0,
    public_repos: 0,
  }); // Precisa ser coletado > E que no resultado apareça a foto, o nome, o login e a localização.

  async function getUser() {
    if (name == "") {
      Alert.alert("Error", "Digite um nome antes de buscar");
    } else {
      const url = `https://api.github.com/users/${name}`;

      try {
        const response = await axios.get(url);
        setUser(response.data);
        setUserList((prevUserList) => [...prevUserList, response.data]);
        console.log(response.data);
      } catch (error) {
        Alert.alert("Error", `O usuário "${name}" não foi encontrado.`);
        console.log("Erro ao buscar usuário:", error);
        setUser({
          avatar_url: "",
          name: "",
          login: "",
          location: "",
          id: 0,
          followers: 0,
          public_repos: 0,
        });
      }
    }
  }

  return (
    <Main>
      <Header />
      <FormBox>
        <InputName> Digite o Nome do Usuário</InputName>

        <TextInputStyled
          onChangeText={setName}
          value={name}
          placeholder="..."
        />
        <FormButton onPress={() => getUser()}>
          <ButtonText>Buscar</ButtonText>
        </FormButton>
       <ResultBox>
          {user.avatar_url ? (
            <>
              <ImageBox>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile", { user })}
                >
                  <UserImage source={{ uri: user.avatar_url }} />
                </TouchableOpacity>
              </ImageBox>

              <InfoBox>
                <UserName>{user.name}</UserName>
                <UserLogin>{user.login}</UserLogin>
                <UserLocation>{user.location}</UserLocation>
              </InfoBox>
            </>
          ) : null}
        </ResultBox>
        <ListButton onPress={() => navigation.navigate("History")}>
          <ButtonText>Histórico de busca</ButtonText>
        </ListButton>
      </FormBox>
    </Main>
  );
}

const Main = styled.View`
  display: flex;
`;
const FormBox = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const InputName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

const TextInputStyled = styled.TextInput`
  margin-top: 15px;
  height: 35px;
  width: 80%;
  border-radius: 5px;
  background-color: grey;
  text-align: center;
`;

const FormButton = styled.TouchableOpacity`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001f3f;
  width: 30%;
  height: 35px;
  border-radius: 15px;
`;

const ListButton = styled.TouchableOpacity`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001f3f;
  width: 45%;
  height: 35px;
  border-radius: 15px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const ResultBox = styled.View`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 300px;

  border-radius: 15px;
`;
const InfoBox = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 25px;
`;
const ImageBox = styled.View`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.Text`
  font-size: 18px;
`;

const UserLogin = styled.Text`
  font-size: 18px;
`;
const UserLocation = styled.Text`
  font-size: 18px;
`;
const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
