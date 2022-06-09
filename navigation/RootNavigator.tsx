import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";

import { Home } from "../screens/Home/Home";
import { Profile } from "../screens/Profile/Profile";

export type RouteParams = {
    Home: undefined;
    Profile: {
        title: string;
        description: string;
    };
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>   
                <Stack.Screen name="Home" 
                    component={Home} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />
                <Stack.Screen name="Profile" 
                    component={Profile} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                /> 
            </Stack.Group>
        </Stack.Navigator>
    );
};