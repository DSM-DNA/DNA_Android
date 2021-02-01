import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Timelines from "../screens/Tabs/Timelines";
import WritePost from "../screens/Tabs/WritePost";

const Tab = createMaterialTopTabNavigator();

export default () => (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="TimeLine" tabBarPosition="bottom">
            <Tab.Screen name="TimeLine" component={Timelines} />
            <Tab.Screen name="WritePost" component={WritePost} />
        </Tab.Navigator>
    </NavigationContainer>
)