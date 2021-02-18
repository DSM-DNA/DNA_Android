import React from "react";
import styled from "styled-components";

const Box = styled.View`
  flex: 1;
  width: 100%;
  height: 130px;
  margin-top: 2%;
  margin-bottom: 3%;
  align-items: center;
  background-color: white;
`;

const Component = styled.View`
  flex: 1;
  flex-direction: row;
  width: 93.6%;
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
  return (
    <Box>
      <Component>
        <Header>
          <Name_Title style={{ fontSize: 20 }}>{props.name}</Name_Title>
          <Date_Text style={{ fontSize: 15 }}>{`${date.getFullYear()}년 ${date.getMonth()}월`}</Date_Text>
          <Day style={{ fontSize: 20 }}>{`${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}일`}</Day>
        </Header>
        <Bottom>
          <Name_Title style={{ fontSize: 20 }}>{props.title}</Name_Title>
          <Date_Text>{props.content}</Date_Text>
        </Bottom>
      </Component>
    </Box>
  );
};
