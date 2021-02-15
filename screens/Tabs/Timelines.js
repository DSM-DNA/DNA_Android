import React from "react";
import styled from "styled-components";
import Adenine from "../../assets/images/Adenine";
import Category from "../../assets/images/Category";
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
`;

const EachButton = styled.View`
  width: 50%;
  height: 100%;
`;

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
      <Adenine />
    </EachButton>
    <EachButton>
      <Thymine />
    </EachButton>
  </Grid>
  <Grid>
    <Text>Button                                  </Text>
    <Text>Button                                  </Text>
  </Grid>
  </>

);