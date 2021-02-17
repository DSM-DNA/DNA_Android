import React from "react";
import styled from "styled-components";
import GlobeSvg from "../assets/images/globe";

const View = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #204051;
`;

const ImgContainer = styled.View`
  padding-top: 20.9%;
  width: 80%;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 37.9%;
  width: 100%;
`;

const Text = styled.Text`
    font-size:40px;
    color: white;
`

export default () => (
  <>
    <View>
      <ImgContainer>
        <GlobeSvg />
      </ImgContainer>
    </View>
    <View>
      <ButtonContainer>
        <Text>Loading...</Text>
      </ButtonContainer>
    </View>
  </>
);
