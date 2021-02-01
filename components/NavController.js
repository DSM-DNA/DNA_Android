import React from "react";
import { Text, View } from "react-native";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
    const isLoggedIn = true;
    return (
        <View style={{flex:1}}>
            {isLoggedIn ? <MainNavigation/> : <Text>Logout</Text>}
        </View>
    );
}