import styled from "styled-components/native";

export default function Header() {
  return (
    <Main >
      <Logo >GitSearch</Logo>
    </Main>
  );
}

const Main = styled.View`
margin-top:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001f3f;
  width: 100%;
  height: 47px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;
const Logo = styled.Text`
  font-size: 20;
  color: #ffff;
`;
