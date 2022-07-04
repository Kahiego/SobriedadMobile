import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";

import { Home } from "../screens/Home/Home";
import { Profile } from "../screens/Profile/Profile";
import { Login } from "../screens/Login/Login";
import { Signup } from "../screens/Signup/Signup";

export type RouteParams = {
    Login: undefined;

    Signup: undefined;

    Home : {
        User : undefined;
        Mail : undefined;
        Username : undefined;
        Lastname : undefined;
        Firstname : undefined;
        Account_Id : undefined;
    }

    Profile: {
        title: string;
        description: string;
        Mail : undefined;
        Username : undefined;
        Lastname : undefined;
        Firstname : undefined;
        Account_Id : undefined;
    };
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Profil" 
                    component={Profile} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />   
                <Stack.Screen name="Connexion" 
                    component={Login} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />  
                <Stack.Screen name="Inscription" 
                    component={Signup} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />  
                <Stack.Screen name="Accueil" 
                    component={Home} 
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