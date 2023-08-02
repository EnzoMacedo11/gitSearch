import { View } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile({ route }) {
  const { user } = route.params;

  
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
    </Main>
  );
}

const Main = styled.View`
  display: flex;
  align-items: center;
`;

const ProfileText = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 700;
`;
const ProfileBox = styled.View`
  margin-top: 15px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 79%;
  background-color: grey;
  border-radius: 20px;
`;
const ProfileInfo = styled.View`
  margin-top: 10px;
  width: 95%;
 
  height: 50%;
`;
const ImageBox = styled.View`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:15px;
`;

const UserName = styled.Text`
  font-size: 16;
  margin-bottom:5px;
  background-color:white;
  border-radius:10px;
  width:92%;
  padding-left:5px;
`;

const UserLogin = styled.Text`
   font-size: 16;
  margin-bottom:5px;
  background-color:white;
  border-radius:10px;
  width:92%;
  padding-left:5px;
`;
const UserLocation = styled.Text`
    font-size: 16;
  margin-bottom:5px;
  background-color:white;
  border-radius:10px;
  width:92%;
  padding-left:5px;
`;
const UserID = styled.Text`
    font-size: 16;
  margin-bottom:5px;
  background-color:white;
  border-radius:10px;
  width:92%;
  padding-left:5px;
`;
const UserFollowers = styled.Text`
    font-size: 16;
  margin-bottom:5px;
  background-color:white;
  border-radius:10px;
  width:92%;
  padding-left:5px;
`;
const UserReps = styled.Text`
    font-size: 16;
  margin-bottom:5px;
  background-color:white;
  border-radius:10px;
  width:92%;
  padding-left:5px;
 
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
