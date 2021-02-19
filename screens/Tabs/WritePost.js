import React from "react";
import styled from "styled-components";
import { Picker } from "@react-native-community/picker";
import { useState } from "react/cjs/react.development";
import WriteHeader from "../../assets/images/WriteHeader";
import WriteBottom from "../../assets/images/WriteBottom";
import WriteButton from "../../components/WriteButton";
import { TextInput } from "react-native-gesture-handler";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { Alert, Keyboard } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const baseUri = "http://121.66.14.43:9191";

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
  background-color: #ebeeef;
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

export default ({ navigation }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const titleInput = useInput("");
  const textInput = useInput("");

  const GetToken = async () => {
    const token = await AsyncStorage.getItem("jwt");
    return token;
  };

  const UploadPost = async () => {
    setLoading(true);
    const { value: title } = titleInput;
    const { value: text } = textInput;
    const token = await GetToken();
    const req_token = "Bearer " + token;

    const config = {
      headers: { Authorization: req_token },
    };

    await axios
      .post(
        `${baseUri}/timeline`,
        {
          type: value,
          title: title,
          content: text,
        },
        config
      )
      .catch(function (error) {
        Alert.alert("게시물등록에 실패했습니다.");
        console.log(error);
      });
    setLoading(false);
    navigation.navigate("Home");
    Keyboard.dismiss();
    Alert.alert("게시글 작성에 성공하였습니다.");
  };
  return (
    <Container>
      <HeaderBox>
        <WriteHeader />
      </HeaderBox>
      <CenterBox>
        <CenterInnerBox>
          <View>
            <Picker
              fontSize={16}
              style={styles.picker}
              selectedValue={value}
              onValueChange={(itemValue, itemIndex) => {
                setValue(itemValue);
              }}
            >
              <Picker.Item label="카테고리를 설정해주세요" value="" />
              <Picker.Item label="A - 노동자 구하기" value="WORKER" />
              <Picker.Item label="T - 대리구매자 구하기" value="BUYER" />
              <Picker.Item label="G - 잠수탄 친구 찾기" value="DIVER" />
              <Picker.Item label="C - 일반 대화 하기" value="COMMON" />
            </Picker>
          </View>
          <View>
            <TextInput
              {...titleInput}
              fontSize={16}
              placeholder="  제목을 입력해주세요"
              autoCorrect={false}
            />
          </View>
          <_View>
            <TextInput
              {...textInput}
              fontSize={16}
              placeholder="  내용을 입력해주세요 (100자 이내)"
              style={{ flexShrink: 1 }}
              multiline={true}
            />
          </_View>
        </CenterInnerBox>
      </CenterBox>
      <BottomBox>
        <WriteBottom />
      </BottomBox>
      <ButtonBox>
        <TouchButton onPress={UploadPost}>
          {loading ? <Text>Loading</Text> : <WriteButton />}
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
    color: "#B5B5B5",
  },
};
