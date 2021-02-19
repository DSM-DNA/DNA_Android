import React from "react";
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    width: 87.2%;
    height: 80px;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 6%;
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
    align-items: center;
    justify-content: center;
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
  top: 3;
  right: 7;
`;

const WriterBox = styled.View`
    height: 20px;
    top: 5;
    left: 6;
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


export default () => {
    return (
        <Container>
            <Header>
                <WriterBox>
                    <Writer style={{fontSize: 15}}>김해교</Writer>
                </WriterBox>
                <Delete>
                    <Del_Text>삭제하기</Del_Text>
                </Delete>
            </Header>
            <Footer>
                <Content style={{fontSize: 12}}>
                배고프다나먹고싶은게너무많아근데돈이없어서그냥자동다이어트아나진짜다이어트해야하는데망했다이번방학에도빙가빙가으휴진짜나태는답없다
                </Content>
            </Footer>
        </Container>
    );
};
/*

const View = styled.View`
  flex:1;
  width: 100%;
  height: 50px;
  background-color: red;
`;

export default () => {
  return (
    <>
    </>
  );
}
*/