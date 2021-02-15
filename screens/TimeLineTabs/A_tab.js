import React from "react";
import styled from "styled-components";
import A from "../../assets/Header/A";

const View = styled.View`
  background-color: white;
  align-items: center;
  flex: 1;
`;

const Header = styled.View`
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
  <>
  <Header>
    <A/>
  </Header>
  <View>
    <Text>Adenine</Text>
  </View>
  </>
);
