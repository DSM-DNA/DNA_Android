import React from "react";
import styled from "styled-components";
import LogoutBack from "../../assets/images/LogoutBack";

const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Image = styled.View`
  width: 80%;
  height: 50%;
`;

export default () => {

  return (
    <View>
      <Image>
        <LogoutBack />
      </Image>
    </View>
  );
}