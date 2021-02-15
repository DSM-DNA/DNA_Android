import React from "react";
import styled from "styled-components";
import CHeader from "../../assets/Header/CHeader";

const View = styled.View`
    flex: 13;
    background-color: white;
`;

const Body = styled.View`
    flex: 87;
    background-color: white;
`;

const Header = styled.View`
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
    <>
        <View>
            <CHeader />
        </View>
        <Body>
            <Text>Hello</Text>
        </Body>
    </>
);
