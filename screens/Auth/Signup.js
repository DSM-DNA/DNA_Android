import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components";
import AuthBackground from "../../assets/images/AuthBackground";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";

const baseUri = "http://121.66.14.43:9191";

const TestContainer = styled.View`
  flex: 1;
  background-color: white;
`;

const View = styled.View`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const _View = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: flex-start;
`;

const ErrText = styled.Text`
  color: red;
  font-size: 13px;
`;

const InputArea = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 18%;
  padding-bottom: 6%;
`;

const EachInput = styled.View`
  align-items: center;
  width: 100%;
`;

const ButtonArea = styled.View`
  width: 100%;
  margin-bottom: 15%;
`;

export default ({ navigation }) => {
  const [checkflag, setCheckflag] = useState("");
  const [pwresult, setPwresult] = useState("");
  const [emresult, setEmresult] = useState("");
  const nameInput = useInput("");
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const confirmPwInput = useInput("");

  const Request_Check = async(email) => {
    axios.get(`${baseUri}/email?email=${email}`)
    .then(function (response) {
      console.log("email res");
      let res = response.request._response;
      console.log(res);
      if (res !== "true") {
        console.log(typeof(res));
        console.log(res === "true");
        setEmresult("※ 이미 사용중인 이메일입니다.");
      } else{
        console.log("Check!");
        setEmresult("");
        console.log(`Before CEM : ${checkflag}`);
        setCheckflag("checkemail");
        console.log(`After CEM : ${checkflag}`)

      }
    })
    .catch(function (error) {
      console.log("email err");
      console.log(error);
    });
  }

  const confirmEmail = async() => {
    const { value : email } = emailInput;
    console.log(email);
    if (email === "") {
      console.log("email empty");
      setEmresult("");
    } else if (
      !email.includes("@dsm.hs.kr") 
    ) {
      console.log("email does not include @dsm.hs.kr")
      setEmresult("※ 이메일 형식이 올바른지 확인해주세요");
    } else {
      console.log("email has @dsm.hs.kr");
      await Request_Check(email);
    }
  };

  const confirmPw = async(event) => {
    const { value: password } = passwordInput;
    let { text } = event.nativeEvent;
    console.log(password);
    console.log(text);
    console.log(event.nativeEvent);
    if (password !== text) {
      setPwresult("※ 비밀번호를 확인해주세요");
    } else {
      setPwresult("");
      if (checkflag === "") {
        console.log(`Before CPW Check flag : ${checkflag}`);
        await setCheckflag("can");
        console.log(`After CPW Check flag : ${checkflag}`);
      }
    }
  };

  const handleSignup = async () => {
    const { value: name } = nameInput;
    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    confirmEmail();
    if (checkflag !== "checkemail") {
      console.log(`Fail Code : ${checkflag}`);
      Alert.alert("회원정보를 입력해주세요");
    } else {
      console.log(`name : ${name}\nemail : ${email}\npassword : ${password}`);
      await axios.post(`${baseUri}/signup`, {
        name: name,
        password: password,
        email: email
      })
      .then(function (response) {
        console.log(response);
        navigation.navigate("Login");
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }; // Login Request

  return (
    <TestContainer>
      <View>
        <_View>
          <AuthBackground />
        </_View>
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
            <ErrText></ErrText>
          </EachInput>
          <EachInput>
            <AuthInput
              {...emailInput}
              placeholder="e-mail을 입력하세요"
              keyboardType="email-address"
              autoCorrect={false}
              fontSize={"20px"}
              marginBottom={"20px"}
            />
            <ErrText>{emresult}</ErrText>
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
            <ErrText></ErrText>
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
            <ErrText>{pwresult}</ErrText>
          </EachInput>
        </InputArea>
        <ButtonArea>
          <AuthButton text="Sign Up" onPress={handleSignup} />
        </ButtonArea>
      </View>
    </TestContainer>
  );
};
