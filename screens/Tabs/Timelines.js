import React from "react";
import styled from "styled-components";
import MainHeader from "../../assets/images/MainHeader";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
  <View>
    <Header>
      <MainHeader />
    </Header>
  </View>
);
