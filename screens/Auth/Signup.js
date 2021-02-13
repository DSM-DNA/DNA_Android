import React, { useState } from "react";
import styled from "styled-components";
import AuthBackground from "../../assets/images/AuthBackground";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";

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
  const [name, setName] = useState(name);
  const [email, setEmail] = useState(email);
  const [password, setPassword] = useState(password);
  const [pw, setPw] = useState(pw);
  const [comment, setComment] = useState("");

  const changeName = (text) => {
    console.log("changing name");
    setName(text);
  }

  const changeEmail = (text) => {
    console.log("changing email");
    setEmail(text);
  };

  const changePassword = (text) => {
    console.log("changing password");
    setPassword(text);
  };
  
  const changeComment = () => {
    console.log("function is run!");
    if(password !== pw){
      setComment("※ 비밀번호를 확인해주세요");
    }else{
      setComment("");
    }
  }
  const changePw = (text) => {
    console.log(text);
    setPw(text);
    changeComment();
  }


  const handleLogin = async () => {}; // Login Request

  return (
    <>
      <View>
        <AuthBackground />
      </View>
      <_View>
        <InputArea>
        <EachInput>
            <AuthInput
              placeholder="이름을 입력하세요"
              value={name}
              keyboardType="default"
              returnKeyType="send"
              onSubmitEditing={changeName}
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              placeholder="e-mail을 입력하세요"
              value={email}
              keyboardType="email-address"
              returnKeyType="send"
              onSubmitEditing={changeEmail}
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              secureTextEntry={true}
              placeholder="password을 입력하세요"
              value={password}
              keyboardType="email-address"
              returnKeyType="done"
              onSubmitEditing={changePassword}
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              secureTextEntry={true}
              placeholder="password을 확인하세요"
              value={pw}
              keyboardType="email-address"
              returnKeyType="done"
              onSubmitEditing={changePw}
              autoCorrect={false}
              fontSize={"20px"}
            />
            <ErrText>{comment}</ErrText>
          </EachInput>
        </InputArea>
        <ButtonArea>
          <AuthButton text="Sign In" onPress={handleLogin} />
        </ButtonArea>
      </_View>
    </>
  );
};
