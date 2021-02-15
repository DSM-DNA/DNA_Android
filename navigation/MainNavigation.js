import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import WritePost from "../screens/Tabs/WritePost";
import Logout from "../screens/Auth/Logout";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Timelines from "../screens/Tabs/Timelines";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => {
  return (
    <Stack.Navigator initialRouteName="TimeLine" headerMode="none">
      <Stack.Screen name="Home" component={Timelines} />
      
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#000000", //터치시 글자색
        inactiveTintColor: "#707070", //비터치시 글자색
        style: {
          backgroundColor: "#f5f5f5", //기본 배경색
        },
        labelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="logout"
              color={focused ? "#000000" : "#707070"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeTabs}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? "#000000" : "#707070"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Write"
        component={WritePost}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pencil"
              color={focused ? "#000000" : "#707070"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
