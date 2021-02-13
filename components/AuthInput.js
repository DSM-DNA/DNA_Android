import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  width: 64.4%;
  height: 50px;
  padding: 10px;
  font-size: ${(props) => props.fontSize};
  font-weight: 100;
  background-color: #f5f5f5;
  border-radius: 25px;
`;

const AuthInput = ({
  secureTextEntry,
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  fontSize = "24px",
  marginBottom = "40px",
  onSubmitEditing = () => null,
  autoCorrect = true,
}) => (
  <TextInput
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    placeholder={placeholder}
    autoCapitalize={autoCapitalize}
    returnKeyType={returnKeyType}
    onSubmitEditing={onSubmitEditing}
    autoCorrect={autoCorrect}
    value={value}
    fontSize={fontSize}
    marginBottom={marginBottom}
  />
);

AuthInput.propTypes = {
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "sear", "send"]),
  onSubmitEditing: PropTypes.func,
  autoCorrect: PropTypes.bool,
};

export default AuthInput;
