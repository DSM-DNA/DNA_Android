import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <View>
      <Text>Logout.js</Text>
    </View>
  );
}
