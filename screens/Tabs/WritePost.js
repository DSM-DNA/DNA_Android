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
        <Picker.Item label="카테고리를 설정해주세요" value="" />
        <Picker.Item label="T - 대리구매자 구하기" value="1" />
        <Picker.Item label="G - 잠수탄 친구 찾기" value="2" />
        <Picker.Item label="C - 일반 대화 하기" value="3" />
        <Picker.Item label="A - 노동자 구하기" value="4" />
      </Picker>
    </View>
  );
};

const styles = {
  picker: {
    width: "100%",
    backgroundColor: "white",
  },
};
