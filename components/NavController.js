import React from "react";
import { Text, View } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
    const isLoggedIn = false;
    return (
        <View style={{flex:1}}>
            {isLoggedIn ? <MainNavigation/> : <AuthNavigation/>}
        </View>
    );
}