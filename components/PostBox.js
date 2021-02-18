import React from "react";
import styled from "styled-components";

const Component = styled.View`
    flex: 1;
    flex-direction: row;
    width: 93.6%;
    height: 168px;
    border-radius: 10px;
`;

const Header = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Bottom = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
`;

const Name_Title = styled.Text`
    color: #204051;
    font-style: bold;
    font-size: 25;
`;

const Date_Text = styled.Text`
    color: black;
    font-size: 15;
`;

const Day = styled.Text`
    color: black;
    font-size: 20;
    font-style: bold;
`;

export default () => {
    <Component>
        <Header>
            <Name_Title>작성자</Name_Title>
            <Date_Text>년 월</Date_Text>
            <Day>일</Day>
        </Header>
        <Bottom>
            <Name_Title>제목</Name_Title>
            <Date_Text>내용 100자</Date_Text>
        </Bottom>
    </Component>
}