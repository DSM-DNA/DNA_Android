import React from "react";
import styled from "styled-components";
import { Picker } from "@react-native-community/picker";
import { useState } from "react/cjs/react.development";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const Text = styled.Text`
  color: black;
`;

export default () => {
  const [value, setValue] = useState("");
  return (
    <View>
      <Picker
        style={styles.picker}
        selectedValue={value.age}
        onValueChange={(itemValue, itemIndex) => {
          setValue({ age: itemValue });
        }}
      >
        <Picker.Item label="나이를 입력하세요" value="" />
        <Picker.Item label="10대" value="1" />
        <Picker.Item label="20대" value="2" />
        <Picker.Item label="30대" value="3" />
        <Picker.Item label="40대" value="4" />
        <Picker.Item label="50대 이상" value="5" />
      </Picker>
    </View>
  );
};

const styles = {
  picker: {
    width: "100%",
    backgroundColor: "grey",
  },
};
