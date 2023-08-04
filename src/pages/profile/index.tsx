import styled from "styled-components/native";
import Header from "../../components/header";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView,TouchableHighlight, Linking } from "react-native";



export default function Profile({ route }: { route: any }) {
  const { user } = route.params;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepo();
  }, []);

  async function getRepo() {
    const url = user.repos_url;
    try {
      const response = await axios.get(url);
      setRepos(response.data);
      console.log(response.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <Main>
      <Header />
      <ProfileText>Dados do Usuário</ProfileText>
      <ProfileBox>
        <ProfileInfo>
          <ImageBox>
            <UserImage source={{ uri: user.avatar_url }} />
          </ImageBox>

          <InfoBox>
            <UserName>Nome: {user.name}</UserName>
            <UserLogin>Login: {user.login}</UserLogin>
            <UserLocation>Local: {user.location}</UserLocation>
            <UserID>ID: {user.id}</UserID>
            <UserFollowers>Seguidores: {user.followers}</UserFollowers>
            <UserReps>Repositórios: {user.public_repos}</UserReps>
          </InfoBox>
        </ProfileInfo>
      </ProfileBox>
          <RepsBox>
          <ScrollView >
            <Center>
              <RepoText>Repositórios</RepoText>
              {Object.values(repos).map((r: any) => (
                <TouchableHighlight
                key={r.id}
                onPress={() => Linking.openURL(r.html_url)}
              >
                <Reps>
                  <RepoInfo>Nome: {r.name}</RepoInfo>
                  <RepoInfo>Linguagem: {r.language}</RepoInfo>
                  <RepoInfo>Descrição: {r.description}</RepoInfo>
                  <RepoInfo>
                    Criado em: {new Date(r.created_at).toLocaleString("pt-BR")}
                  </RepoInfo>
                  <RepoInfo>
                    Último push em: {new Date(r.pushed_at).toLocaleString("pt-BR")}
                  </RepoInfo>
                </Reps>
              </TouchableHighlight>
              ))}
            </Center>
            </ScrollView>
          </RepsBox>
    </Main>
  );
}

//

const Main = styled.View`
  display: flex;
  align-items: center;
`;

const ProfileText = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
`;
const RepoText = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const RepoInfo = styled.Text`
  margin-left:3px;
  font-size: 14px;
  margin-bottom: 5px;
  width: 92%;
  color: white;
`;
const ProfileBox = styled.View`
  margin-top: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 310px;
  background-color: #081e4a;
  border-radius: 20px;
`;
const ProfileInfo = styled.View`
  margin-top: 5px;
  width: 95%;
  border-radius: 15px;
  border: 2px solid black;
  height: 302px;
`;
const ImageBox = styled.View`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const UserName = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  width: 92%;
  padding-left: 5px;
`;

const UserLogin = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  width: 92%;
  padding-left: 5px;
`;
const UserLocation = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  width: 92%;
  padding-left: 5px;
`;
const UserID = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  width: 92%;
  padding-left: 5px;
`;
const UserFollowers = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  width: 92%;
  padding-left: 5px;
`;
const UserReps = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  width: 92%;
  padding-left: 5px;
`;
const UserImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
const InfoBox = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 25px;
`;

const RepsBox = styled.View`
  margin-top: 5px;
  width: 95%;
  background-color: #081e4a;
  border-radius: 20px;
  height:255px;
`;

const Reps = styled.View`
  display: flex;
  justify-content: center;
 margin-top:5px;
  max-width: 75%;
  height:200px;
  background-color: #1e5a94;
  border-radius: 15px;
  margin-bottom:5px;
`;

const Center = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

