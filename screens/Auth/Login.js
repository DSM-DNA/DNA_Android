import React from "react";
import styled from "styled-components";
import AuthBackground from "../../assets/images/AuthBackground";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";

const TestContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
    background-color: red;
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
  position: absolute;
  align-items: center;
  justify-content: flex-start;
`;

const InputArea = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 15%;
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

const HeaderBack = styled.View`
  width: 100%;
  height: 40%;
  background-color: #204051;
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
        <HeaderBack />
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
/*

<View style={{flex: 1,flexDirection:'row', backgroundColor:'green', justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',alignSelf:'flex-end',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-start',alignSelf:'flex-end',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                </View>

                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',alignSelf:'flex-start',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-start',alignSelf:'flex-start',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                </View>

                <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
                    <View style={{backgroundColor:'blue',
                        borderRadius:10,height:100, width:100, borderRadius:100/2}}></View>
       </View>
</View>

*/