import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import GlobeSvg from "../../assets/images/globe.js";
import AuthButton from "../../components/AuthButton.js";
import Login from "./Login";
import Signup from "./Signup";

const View = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #204051;
`;

const ImgContainer = styled.View`
  padding-top: 20.9%;
  width: 80%;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 37.9%;
  width: 100%;
`;

export default ({ navigation }) => (
  <>
    <View>
      <ImgContainer>
        <GlobeSvg />
      </ImgContainer>
    </View>
    <View>
      <ButtonContainer>
        <AuthButton
          text={"Sign In"}
          onPress={() => navigation.navigate("Login")}
        />
        <AuthButton
          text={"Sign Up"}
          bgColor={"#ffffff"}
          onPress={() => navigation.navigate("Signup")}
        />
      </ButtonContainer>
    </View>
  </>
);
