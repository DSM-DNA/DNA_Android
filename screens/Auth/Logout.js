import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import Adenine from "../../assets/images/Adenine";
import Category from "../../assets/images/Category";
import Cytosine from "../../assets/images/Cytosine";
import Guanine from "../../assets/images/Guanine";
import MainHeader from "../../assets/images/MainHeader";
import MainNotice from "../../assets/images/MainNotice";
import Thymine from "../../assets/images/Thymine";
import { useLogOut } from "../../AuthContext";
import Logout from "../Auth/Logout";
import { useState } from "react/cjs/react.development";
import { Alert } from "react-native";
import { useEffect } from "react";

const baseUri = "http://121.66.14.43:9191";

const View = styled.View`
  background-color: white;
  justify-content: flex-start;
  flex: 2;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
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

const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor};
  width: 190px;
  height: 118px;
  border-radius: 16px;
  padding-bottom: 30px;
  padding-left: 7px;
  elevation: 3;
`;
//width: 206px height 190px;
const Text = styled.Text`
  color: black;
  font-size: 15px;
`;

export default ({ navigation }) => {
  const logOut = useLogOut();

  const Logout = async () => {
    const token = "";
    axios
      .get(`${baseUri}/logout?${token}`)
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    logOut();
  };

  const confirmAlert = () => {
    Alert.alert(
      "로그아웃 하시겠습니까?",
      "",
      [
        {
          text: "No",
          onPress: () => navigation.navigate("Home"),
        },
        {
          text: "Yes",
          onPress: () => Logout(),
        },
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    confirmAlert();
  })
  return (
    <>
      <View>
        <Header>
          <MainHeader />
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
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
          <Container
            bgColor={white}
            onPress={() => navigation.navigate("A_tab")}
          >
            <Adenine />
          </Container>
        </EachButton>
        <EachButton>
          <Container
            bgColor={green}
            onPress={() => navigation.navigate("T_tab")}
          >
            <Thymine />
          </Container>
        </EachButton>
      </Grid>
      <Grid>
        <EachButton>
          <Container
            bgColor={green}
            onPress={() => navigation.navigate("G_tab")}
          >
            <Guanine />
          </Container>
        </EachButton>
        <EachButton>
          <Container
            bgColor={white}
            onPress={() => navigation.navigate("C_tab")}
          >
            <Cytosine />
          </Container>
        </EachButton>
      </Grid>
      <Bottom></Bottom>
    </>
  );
};
