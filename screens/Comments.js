import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import PTRView from "react-native-pull-to-refresh";
import styled from "styled-components";
import AHeader from "../assets/Header/AHeader";
import THeader from "../assets/Header/THeader";
import GHeader from "../assets/Header/GHeader";
import CHeader from "../assets/Header/CHeader";
import PostBox from "../components/PostBox";
import useInput from "../hooks/useInput";
import CommentBox from "../components/CommentBox";

const baseUri = "http://121.66.14.43:9191";

const View = styled.View`
  background-color: white;
`;

const AllView = styled.View`
  flex: 1;
  height: 100%;
`;

const Comment = styled.TextInput`
  background-color: grey;
  width: 90%;
  height: 100%;
  padding-left: 8px;
  position: absolute;
  left: 0;
`;

const Submit = styled.View`
  background-color: grey;
  height: 100%;
  width: 10%;
  position: absolute;
  right: 0;
`;

export default ({ route }) => {
  const post = route.params;
  const [comments, setComments] = useState(null);
  const commentInput = useInput("");

  const GetToken = async () => {
    const token = await AsyncStorage.getItem("jwt");
    return token;
  };

  const GetComment = async () => {
    const token = await GetToken();
    const req_token = "Bearer " + token;

    const config = {
      headers: { Authorization: req_token },
    };

    await axios
      .get(`${baseUri}/comment/${post.timelineId}?size=30&page=0`, config)
      .then(function (response) {
        setComments(response.data.commentResponses);
        console.log(response.data);
        if(response.data.totalElements === 0){
            Alert.alert("댓글이 없습니다.");
        }
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("데이터를 불러올수 없습니다.");
      });
  };
  useEffect(() => {
    console.log(post);
    GetComment();
  }, []);

  return (
    <AllView>
      <View
        style={{
          height: "13%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {post.type === "WORKER" && <AHeader />}
        {post.type === "BUYER" && <THeader />}
        {post.type === "DIVE" && <GHeader />}
        {post.type === "COMMON" && <CHeader />}
      </View>
      <View style={{ height: 130, width: "100%", backgroundColor: "yellow" }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 130,
            alignItems: "center",
          }}
        >
          <PostBox
            key={post.timelineId}
            content={post.content}
            createdAt={post.createdAt}
            isMine={post.isMine}
            name={post.name}
            timelineId={post.timelineId}
            title={post.title}
          />
        </View>
      </View>
      <View style={{ width: "100%", height: "5%" }}>
        <View
          style={{
            backgroundColor: "#3B6978",
            width: "100%",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>댓글</Text>
        </View>
      </View>
      <PTRView
        style={{
          width: "100%",
          height: "87%",
          backgroundColor: "white",
        }}
        onRefresh={() => {
          GetComment();
        }}
        pullHeight={60}
      >
        <ScrollView>
          <CommentBox />
        </ScrollView>
      </PTRView>
      <View
        style={{ width: "100%", height: "5%", alignItems: "space-between" }}
      >
        <Comment
          fontSize={20}
          placeholder="댓글 입력"
          autoCorrect={false}
          {...commentInput}
        ></Comment>

        <Submit />
      </View>
    </AllView>
  );
};
