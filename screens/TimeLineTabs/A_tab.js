import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import AHeader from "../../assets/Header/AHeader";
import PostBox from "../../components/PostBox";

const View = styled.View`
  background-color: white;
`;

const AllView = styled.View`
  height: 100%;
`;

const Body = styled.View`
  background-color: red;
  align-items: center;
`;

const PostArea = styled.View`
  margin-top: 6%;
  width: 93.6%;
  height: 130px;
  border-radius: 10px;
`;

export default () => (
  <AllView>
    <View
      style={{ flex: 13, justifyContent: "flex-start", alignItems: "center" }}
    >
      <AHeader />
    </View>
    <View style={{ flex: 87 }}>
      <ScrollView>
        <Body>
          <PostArea>
            <PostBox />
          </PostArea>
          <PostArea>
            <PostBox />
          </PostArea>
          <PostArea>
            <PostBox />
          </PostArea>
          <PostArea>
            <PostBox />
          </PostArea>
          <PostArea>
            <PostBox />
          </PostArea>
          <PostArea>
            <PostBox />
          </PostArea>
        </Body>
      </ScrollView>
    </View>
  </AllView>
);
