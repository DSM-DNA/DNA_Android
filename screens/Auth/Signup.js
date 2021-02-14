import React, { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import AuthBackground from "../../assets/images/AuthBackground";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";

const View = styled.View`
  background-color: #204051;
  justify-content: flex-end;
  align-items: center;
  flex: 40;
`;

const _View = styled.View`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex: 60;
`;

const ErrText = styled.Text`
  color: red;
  font-size: 13px;
`;

const InputArea = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 8%;
`;

const EachInput = styled.View`
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
`;

const ButtonArea = styled.View`
  width: 100%;
  margin-bottom: 15%;
`;

export default () => {
  const [comment, setComment] = useState("");
  const nameInput = useInput("");
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const confirmPwInput = useInput("");

  const confirmEmail = (event) => {
    console.log(event.nativeEvent);
  };

  const confirmPw = (event) => {
    const { value: password } = passwordInput;
    //const { value : pw } = confirmPwInput;
    let { text } = event.nativeEvent;
    console.log(text);
    console.log(event.nativeEvent);
    if (password !== text) {
      setComment("※ 비밀번호를 확인해주세요");
    } else {
      setComment("");
    }
  };

  const handleSignup = async () => {}; // Login Request

  return (
    <>
      <View>
        <AuthBackground />
      </View>
      <_View>
        <InputArea>
          <EachInput>
            <AuthInput
              {...nameInput}
              placeholder="이름을 입력하세요"
              keyboardType="default"
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              {...emailInput}
              placeholder="e-mail을 입력하세요"
              keyboardType="email-address"
              onChange={confirmEmail}
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              {...passwordInput}
              secureTextEntry={true}
              placeholder="password을 입력하세요"
              keyboardType="default"
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              {...confirmPwInput}
              secureTextEntry={true}
              placeholder="password을 확인하세요"
              keyboardType="default"
              returnKeyType="done"
              onChange={(event) => confirmPw(event)}
              autoCorrect={false}
              fontSize={"20px"}
            />
            <ErrText>{comment}</ErrText>
          </EachInput>
        </InputArea>
        <ButtonArea>
          <AuthButton text="Sign In" onPress={handleSignup} />
        </ButtonArea>
      </_View>
    </>
  );
};
