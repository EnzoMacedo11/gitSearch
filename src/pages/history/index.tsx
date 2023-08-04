import styled from "styled-components/native";
import Header from "../../components/header";
import { ScrollView, TouchableOpacity } from "react-native";
import { UserContext } from "../../context/userContext";
import { useContext, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

export default function History() {
  const navigation = useNavigation();
  const { userList } = useContext(UserContext);
  const uniqueUser = useRef(new Set());
  return (
    <Main>
      <Header />
      <Container>
        <Title> Usuários Buscados</Title>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: 270 }}>
          {Object.values(userList).map((u: any) => {
            if (uniqueUser.current.has(u.id)) {
              return null;
            }
            uniqueUser.current.add(u.id);
            return (
              <ResultBox key={u.id}>
                <ImageBox>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profile", { user: u })}
                  >
                    <UserImage source={{ uri: u.avatar_url }} />
                  </TouchableOpacity>
                </ImageBox>

                <InfoBox>
                  <UserName>{u.name}</UserName>
                  <UserLogin>{u.login}</UserLogin>
                  <UserLocation>{u.location}</UserLocation>
                </InfoBox>
              </ResultBox>
            );
          })}
        </ScrollView>
      </Container>
    </Main>
  );
}

const Main = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;
const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90%;
`;
const ResultBox = styled.View`
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  background-color: #001f3f;
  border-radius: 15px;
`;
const InfoBox = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 15px;
`;
const ImageBox = styled.View`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.Text`
  font-size: 16px;
  color: white;
`;

const UserLogin = styled.Text`
  font-size: 16px;
  color: white;
`;
const UserLocation = styled.Text`
  font-size: 16px;
  color: white;
`;
const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
