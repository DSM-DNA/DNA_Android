import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React from "react";
import { Alert } from "react-native";
import styled from "styled-components";

const baseUri = "http://121.66.14.43:9191";

const Box = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: white;
`;

const Component = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  width: 93.6%;
  height: 130px;
  margin-top: 2%;
  margin-bottom: 3%;
  height: 130px;
  border-radius: 10px;
  background-color: white;
  elevation: 6;
`;

const Header = styled.View`
  flex: 1;
  padding-top: 15px;
  justify-content: flex-start;
  align-items: center;
`;

const Bottom = styled.View`
  flex: 2;
  padding-left: 5.7%;
  padding-top: 15px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Delete = styled.TouchableOpacity`
  flex: 0.4;
  padding-left: 1%;
  margin-top: 7px;
  margin-right: 10px;
  justify-content: flex-start;
  background-color: #204051;
  height: 15px;
  width: 100%;
`;

const Del_Text = styled.Text`
  color: white;
`;

const Name_Title = styled.Text`
  color: #204051;
  font-weight: bold;
`;

const Date_Text = styled.Text`
  color: black;
`;

const Day = styled.Text`
  color: black;
  font-weight: bold;
`;

export default (props) => {
  console.log(props);
  const date = new Date(props.createdAt);

  const GetToken = async () => {
    const token = await AsyncStorage.getItem("jwt");
    return token;
  };

  const PostDelete = async () => {
    const token = await GetToken();
    const req_token = "Bearer " + token;

    const config = {
      headers: { Authorization: req_token },
    };

    await axios
      .delete(`${baseUri}/timeline/${props.timelineId}`, config)
      .catch(function (error) {
        console.log(error);
        Alert.alert("게시물을 삭제할 수 없습니다.");
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
          onPress: () => PostDelete(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Component onPress={props.onPress}>
      <Header>
        <Name_Title style={{ fontSize: 20 }}>{props.name}</Name_Title>
        <Date_Text
          style={{ fontSize: 15 }}
        >{`${date.getFullYear()}년 ${date.getMonth()}월`}</Date_Text>
        <Day style={{ fontSize: 20 }}>{`${
          date.getDay() < 10 ? "0" + date.getDay() : date.getDay()
        }일`}</Day>
      </Header>
      <Bottom>
        <Name_Title style={{ fontSize: 20 }}>{props.title}</Name_Title>
        <Date_Text>{props.content}</Date_Text>
      </Bottom>
      {props.isMine === true ? (
        <Delete onPress={() => confirmAlert()}>
          <Del_Text style={{ fontSize: 10 }}>삭제하기</Del_Text>
        </Delete>
      ) : null}
    </Component>
  );
};
