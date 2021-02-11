import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import GlobeSvg from '../../assets/images/globe.js';
import AuthButton from "../../components/AuthButton.js";

const View = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #204051;
`;


export default ({ navigation }) => (
    <View>
        <GlobeSvg />
        <AuthButton
            text={"Create New Account"}
            onPress={() => navigation.navigate("Signup")}
        />
    </View>
);