import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import PTRView from "react-native-pull-to-refresh";
import styled from "styled-components";
import AHeader from "../assets/Header/AHeader";
import THeader from "../assets/Header/THeader";
import GHeader from "../assets/Header/GHeader";
import CHeader from "../assets/Header/CHeader";

const baseUri = "http://121.66.14.43:9191";

const View = styled.View`
  background-color: white;
`;

const AllView = styled.View`
  flex: 1;
  height: 100%;
`;

export default ({route}) => {
    const post = route.params;
  const [comments, setComments] = useState(null);

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
        console.log(comments);
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
      <View style={{ width: "100%", height: "80%", alignItems: "center" }}>
        <PTRView
          style={{
            width: "100%",
            height: "87%",
          }}
          onRefresh={() => {
            GetComment();
          }}
          pullHeight={100}
        >
          <ScrollView>
          </ScrollView>
        </PTRView>
      </View>
      <View style={{ backgroundColor: "grey", width: "100%", height: "7%"}}>

      </View>
    </AllView>
  );
};
