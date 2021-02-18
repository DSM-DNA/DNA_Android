import React from "react";
import styled from "styled-components";
import PTRView from "react-native-pull-to-refresh";

const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: red;
`;

export default () => {
  const refresh = async() => {
    await setTimeout(()=>{console.log("load")}, 2000);
  }
  return (
    <PTRView onRefresh={() => refresh()}>
      <View/>
    </PTRView>
  );
}