import React from "react";
import styled from "styled-components";
import Selectbox from "react-native-selectbox";
import { useState } from "react/cjs/react.development";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  color: black;
`;

export default () => {
  const items = [
    { key: 0, label: 'Fruits', value:'some value' },
    { key: 1, label: 'Fruit', value:'hello' },
  ];
  const onChange = (item) => {
    console.log(item);
  }
  return (
    <View>
      <Text>Logout</Text>
      <Selectbox
        selectedItem={items[0]}
        onChange={onChange}
        items={items} />
    </View>
  );
};
