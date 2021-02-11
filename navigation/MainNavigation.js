import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Timelines from "../screens/Tabs/Timelines";
import WritePost from "../screens/Tabs/WritePost";

const Tab = createBottomTabNavigator();

export default () => (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Logout" component={Timelines} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="logout" color={"#262626"} size={30} />
                ),
            }}/>
            <Tab.Screen name="Home" component={Timelines} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" color={"#262626"} size={30} />
                ),
            }}/>
            <Tab.Screen name="Write" component={WritePost} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="pencil" color={"#262626"} size={30} />
                ),
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
)