import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Timelines from "../screens/Tabs/Timelines";

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TimeLine" headerMode= "none">
            <Stack.Screen name="TimeLine" component={Timelines} />
        </Stack.Navigator>
    </NavigationContainer>
)