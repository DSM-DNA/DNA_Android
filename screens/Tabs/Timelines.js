import React from "react";
import styled from "styled-components";
import MainHeader from "../../assets/images/MainHeader";
import MainNotice from "../../assets/images/MainNotice";

const View = styled.View`
  background-color: white;
  justify-content: flex-start;
  flex: 1;
`;

const Header = styled.View`
  margin-top: 54px;
  width: 80%;
  height: 9%;
  margin-bottom: 22px;
`;

const Notice = styled.View`
  width: 100%;
  height: 20%;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
  <View>
    <Header>
      <MainHeader />
    </Header>
    <Notice>
      <MainNotice />
    </Notice>
  </View>
);
