import React from "react";
import styled from "styled-components";
import AuthBackground from "../../assets/images/AuthBackground";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";

const TestContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
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

const InputArea = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 16%;
  padding-bottom: 7%;
`;

const EachInput = styled.View`  
  width: 100%;
  margin-bottom: 40px;
  align-items: center;
`;

const ButtonArea = styled.View`
  width: 100%;
  margin-bottom: 38%;
`;

export default ({navigation}) => {
  const emailInput = useInput("");
  const passwordInput = useInput("");

  const handleLogin = async () => {
    const { value : email } = emailInput;
    const { value : password} = passwordInput;
    console.log(email, password);
    
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
              {...emailInput}
              placeholder="e-mail"
              keyboardType="email-address"
              autoCorrect={false}
            />
          </EachInput>
          <EachInput>
            <AuthInput
              {...passwordInput}
              secureTextEntry={true}
              placeholder="password"
              keyboardType="default"
              autoCorrect={false}
            />
          </EachInput>
        </InputArea>
        <ButtonArea>
          <AuthButton text="Sign In" onPress={handleLogin} />
        </ButtonArea>
      </View>
    </TestContainer>
  );
};
