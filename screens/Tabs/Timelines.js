import React from "react";
import styled from "styled-components";
import Adenine from "../../assets/images/Adenine";
import Category from "../../assets/images/Category";
import Cytosine from "../../assets/images/Cytosine";
import Guanine from "../../assets/images/Guanine";
import MainHeader from "../../assets/images/MainHeader";
import MainNotice from "../../assets/images/MainNotice";
import Thymine from "../../assets/images/Thymine";

const View = styled.View`
  background-color: white;
  justify-content: flex-start;
  flex: 2;
`;

const Header = styled.View`
  margin-top: 54px;
  width: 80%;
  height: 18%;
  margin-bottom: 22px;
`;

const Notice = styled.View`
  width: 100%;
  height: 40%;
`;

const MidCategory = styled.View`
  margin-top: 10%;
  padding-left: 8%;
  width: 37%;
  height: 10%;
`;

const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: center;
`;

const Bottom = styled.View`
  background-color: white;
  flex: 0.5;
  width: 100%;
  height: 100%;
`;

const EachButton = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const green = "#CAE8D5";
const white = "#ffffff";

const Container = styled.View`
  background-color: ${props => props.bgColor};
  width: 190px;
  height: 118px;
  borderRadius: 16px;
  padding-bottom: 30px;
  padding-left: 7px;
  elevation: 1;
`;
//width: 206px height 190px;
const Text = styled.Text`
  color: black;
`;

export default () => (
  <>
  <View>
    <Header>
      <MainHeader />
    </Header>
    <Notice>
      <MainNotice />
    </Notice>
    <MidCategory>
      <Category />
    </MidCategory>
  </View>
  <Grid>
    <EachButton>
      <Container bgColor={white}>
        <Adenine />
      </Container>
    </EachButton>
    <EachButton>
      <Container bgColor={green}>
        <Thymine />
      </Container>
    </EachButton>
  </Grid>
  <Grid>
    <EachButton>
      <Container bgColor={green}>
        <Guanine />
      </Container>
    </EachButton>
    <EachButton>
      <Container bgColor={white}>
        <Cytosine />
      </Container>
    </EachButton>
  </Grid>
  <Bottom>

  </Bottom>
  </>

);