import React from "react";
import styled from "styled-components";

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
    return (
        <Container>
            <Header>
                <WriterBox style={{top: 5, left: 6}}>
                    <Writer style={{fontSize: 15}}>null</Writer>
                </WriterBox>
                <Delete style={{top: 3, right: 7}}>
                    {props.isMine === true ? <Del_Text>삭제하기</Del_Text> : null}
                </Delete>
            </Header>
            <Footer>
                <Content style={{fontSize: 12}}>
                    {props.content}
                </Content>
            </Footer>
        </Container>
    );
};