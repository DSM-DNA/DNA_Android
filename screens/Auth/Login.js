import React from "react";
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

const InputArea = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 8%;
`;

const EachInput = styled.View`  
  width: 100%;
  margin-bottom: 40px;
  align-items: center;
`;

const ButtonArea = styled.View`
  width: 100%;
  margin-bottom: 20%;
`;

export default ({navigation}) => {
  const emailInput = useInput("");
  const passwordInput = useInput("");

  const handleLogin = async () => {
    const { value } = emailInput;
    console.log(typeof(value), value);
    console.log("Login!");
    
  }; // Login Request

  return (
    <>
      <View>
        <AuthBackground />
      </View>
      <_View>
        <InputArea>
          <EachInput>
            <AuthInput
              {...emailInput}
              placeholder="e-mail"
              keyboardType="email-address"
              onSubmitEditing={handleLogin}
              autoCorrect={false}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              {...passwordInput}
              secureTextEntry={true}
              placeholder="password"
              keyboardType="email-address"
              onSubmitEditing={handleLogin}
              autoCorrect={false}
            />
          </EachInput>
        </InputArea>
        <ButtonArea>
          <AuthButton text="Sign In" onPress={handleLogin} />
        </ButtonArea>
      </_View>
    </>
  );
};
