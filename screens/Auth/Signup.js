import React from "react";
import styled from "styled-components";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  color: black;
`;

export default () => (
  <View>
    <Text>SignUp</Text>
  </View>
);
