import React from "react";
import { Text, View } from "react-native";

export default () => {
    const isLoggedIn = false;
    return (
        <View>
            {isLoggedIn ? <Text>Login</Text> : <Text>Logout</Text>}
        </View>
    );
}