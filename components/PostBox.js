import React from "react";
import styled from "styled-components";

const Component = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 168px;
    border-radius: 10px;
    background-color: white;
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
`;

const Date_Text = styled.Text`
    color: black;
`;

const Day = styled.Text`
    color: black;
`;

export default (props) => {
    console.log(props);
    return(
        <Component>
            <Header>
                <Name_Title style={{fontSize: 20, fontStyle: "bold"}}>작성자</Name_Title>
                <Date_Text style={{fontSize: 15}}>년 월</Date_Text>
                <Day style={{fontStyle:"bold", fontSize: 20}}>일</Day>
            </Header>
            <Bottom>
                <Name_Title style={{fontSize: 20, fontStyle: "bold"}}>제목</Name_Title>
                <Date_Text>내용 100자</Date_Text>
            </Bottom>
        </Component>
    );
}