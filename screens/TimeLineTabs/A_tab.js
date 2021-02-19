import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PTRView from "react-native-pull-to-refresh";
import styled from "styled-components";
import AHeader from "../../assets/Header/AHeader";
import PostBox from "../../components/PostBox";

const baseUri = "http://121.66.14.43:9191";

const View = styled.View`
  background-color: white;
`;

const AllView = styled.View`
  flex: 1;
  height: 100%;
`;

export default ({ navigation }) => {
  const [posts, setPosts] = useState(null);

  const GetToken = async () => {
    const token = await AsyncStorage.getItem("jwt");
    return token;
  };

  const GetPost = async () => {
    const token = await GetToken();
    const req_token = "Bearer " + token;

    const config = {
      headers: { Authorization: req_token },
    };

    await axios
      .get(`${baseUri}/timeline/WORKER?size=30&page=0`, config)
      .then(function (response) {
        setPosts(response.data.timelineResponses);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("데이터를 불러올수 없습니다.");
      });
  };
  useEffect(() => {
    GetPost();
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
        <AHeader />
      </View>
      <PTRView
        style={{backgroundColor:"white"}}
        onRefresh={() => {
          GetPost();
        }}
        pullHeight={100}
      >
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            height: "87%",
            alignItems: "center",
          }}
        >
          {posts?.map((post) => (
            <PostBox
              onPress={()=> navigation.navigate("Comments", post)}
              key={post.timelineId}
              content={post.content}
              createdAt={post.createdAt}
              isMine={post.isMine}
              name={post.name}
              timelineId={post.timelineId}
              title={post.title}
            />
          ))}
        </ScrollView>
      </PTRView>
    </AllView>
  );
};
