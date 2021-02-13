import React from "react";
import styled from "styled-components";
import AuthBackground from "../../assets/images/AuthBackground";

const View = styled.View`
  background-color: #204051;
  justify-content: flex-end;
  align-items: center;
  flex: 40;
`;

const _View = styled.View`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex: 60;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
  <>
    <View>
      <AuthBackground/>
    </View>
    <_View>
      <Text>Login</Text>
    </_View>
  </>
);
