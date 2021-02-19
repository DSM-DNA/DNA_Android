import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React from "react";
import { Alert } from "react-native";
import styled from "styled-components";

const baseUri = "http://121.66.14.43:9191";

const Container = styled.View`
  flex: 1;
  width: 87.2%;
  height: 80px;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: white;
  elevation: 6;
`;

const Header = styled.View`
  width: 100%;
  height: 30%;
`;

const Footer = styled.View`
  width: 96%;
  height: 70%;
  padding-left: 3%;
`;

const Delete = styled.TouchableOpacity`
  margin-top: 8px;
  margin-right: 9px;
  align-items: center;
  justify-content: center;
  background-color: #204051;
  height: 15px;
  width: 61px;
  position: absolute;
`;

const WriterBox = styled.View`
  height: 20px;
`;

const Writer = styled.Text`
  color: #204051;
`;

const Del_Text = styled.Text`
  color: white;
`;

const Content = styled.Text`
  color: black;
`;

export default (props) => {
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
      .get(`${baseUri}/comment/${props.postId}?size=30&page=0`, config)
      .then(function (response) {
        props.setState(response.data.totalElements);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("데이터를 불러올수 없습니다.");
      });
  };

  const Del_comment = async () => {
    const token = await GetToken();
    const req_token = "Bearer " + token;

    const config = {
      headers: { Authorization: req_token },
    };

    await axios
      .delete(`${baseUri}/comment/${props.commentId}`, config)
      .then(function (response){
        GetComment();
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("댓글을 삭제할 수 없습니다.");
      });
  };

  const confirmAlert = () => {
    Alert.alert(
      "삭제하시겠습니까?",
      "",
      [
        {
          text: "No",
          onPress: () => null,
        },
        {
          text: "Yes",
          onPress: () => Del_comment(),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <Container>
      <Header>
        <WriterBox style={{ top: 5, left: 6 }}>
          <Writer style={{ fontSize: 15 }}>{props.name ? props.name : "null"}</Writer>
        </WriterBox>
        <Delete style={{ top: 3, right: 7 }} onPress={() => confirmAlert()}>
          {props.isMine === true ? <Del_Text>삭제하기</Del_Text> : null}
        </Delete>
      </Header>
      <Footer>
        <Content style={{ fontSize: 12 }}>{props.content}</Content>
      </Footer>
    </Container>
  );
};
