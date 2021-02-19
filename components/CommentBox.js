import React from "react";
import styled from "styled-components";

const Box = styled.View`
    flex: 1;
    width: 87.2%;
    height: 82px;
    background-color: white:
`;

const Header = styled.View`
    flex:1;
    flex-direction: row;
`;

const Footer = styled.View`
    flex:3;
`;

const Delete = styled.TouchableOpacity`
  margin-top: 8px;
  margin-right: 9px;
  background-color: #204051;
  height: 15px;
  width: 61px;
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
        <Box>
            <Header>
                <Writer style={{fontSize: 15}}>김해교</Writer>
                <Delete>
                    <Del_Text>삭제하기</Del_Text>
                </Delete>
            </Header>
            <Footer>
                <Content style={{fontSize: 12}}>
                배고프다나먹고싶은게너무많아근데돈이없어서그냥자동다이어트아나진짜다이어트해야하는데망했다이번방학에도빙가빙가으휴진짜나태는답없다
                </Content>
            </Footer>
        </Box>
    );
}