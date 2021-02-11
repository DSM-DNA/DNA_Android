import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";

const default_color = "#84A9AC";
const white_color = "#ffffff";

const Touchable = styled.TouchableOpacity``;

const Container = styled.View`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : default_color};
  padding: 10px;
  margin: 0px 50px;
  border-radius: 4px;
  width: 64.4%;
`;

const Text = styled.Text`
  color: ${(props) => 
    props.textColor ? props.textColor : white_color};
  text-align: center;
  font-weight: 600;
`;

const AuthButton = ({ text, onPress, loading = false, textColor = null, bgColor = null }) => (
  <Touchable disabled={loading} onPress={onPress}>
    <Container bgColor={bgColor}>
      {loading ? <ActivityIndicator color={"white"} /> : <Text>{text}</Text>}
    </Container>
  </Touchable>
);

AuthButton.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AuthButton;
