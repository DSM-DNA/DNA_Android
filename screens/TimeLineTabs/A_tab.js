import React from "react";
import styled from "styled-components";
import AHeader from "../../assets/Header/AHeader";

const View = styled.View`
    flex: 1;
    background-color: white;
`;

const Header = styled.View`
    width: 100%;
    height: 100%;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
  <View>
    <AHeader/>
    
  </View>
);
