import React from "react";
import styled from "styled-components";
import { Picker } from "@react-native-community/picker";
import { useState } from "react/cjs/react.development";
import WriteHeader from "../../assets/images/WriteHeader";
import WriteBottom from "../../assets/images/WriteBottom";
import WriteButton from "../../components/WriteButton";
import { TextInput } from "react-native-gesture-handler";
import useInput from "../../hooks/useInput";

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const HeaderBox = styled.View`
  width: 100%;
  height: 18.3%;
`;

const CenterBox = styled.View`
  align-items: center;
  width: 100%;
  height: 56%;
`;

const CenterInnerBox = styled.View`
  align-items: center;
  width: 93.4%;
  height: 100%;
  background-color: #EBEEEF;
`;

const BottomBox = styled.View`
  width: 100%;
  height: 9.3%;
`;

const ButtonBox = styled.View`
  width: 100%;
  height: 16.4%;
  align-items: center;
`;

const TouchButton = styled.TouchableOpacity`
  width: 100%;
  height: 35%;
  align-items: center;
`;

const View = styled.View`
  background-color: white;
  justify-content: center;
  width: 92%;
  height: 9%;
  margin-top: 4%;
`;

const _View = styled.View`
  background-color: white;
  width: 92%;
  height: 100%;
  margin-top: 4%;
`;

const Text = styled.Text`
  color: black;
`;

export default () => {
  const [value, setValue] = useState("");
  const titleInput = useInput("");
  const UploadPost = async() => {
    const { value : title} = titleInput;
    console.log(title);
  }
  return (
    <Container>
      <HeaderBox>
        <WriteHeader />
      </HeaderBox>
      <CenterBox>
        <CenterInnerBox>
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
          <View>
            <TextInput
              {...titleInput}
              secureTextEntry={false}
              placeholder="  제목을 입력해주세요"
              keyboardType="default"
              autoCorrect={false}
            />
          </View>
          <_View>
            <TextInput placeholder="  내용을 입력해주세요 (100자 이내)" style = {{flexShrink:1}} multiline ={true}/>
          </_View>
        </CenterInnerBox>
      </CenterBox>
      <BottomBox>
        <WriteBottom />
      </BottomBox>
      <ButtonBox>
        <TouchButton onPress={UploadPost}>
          <WriteButton />
        </TouchButton>
      </ButtonBox>
    </Container>
  );
};

const styles = {
  picker: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    fontSize: "8px",
    color: "#B5B5B5"
  },
};
