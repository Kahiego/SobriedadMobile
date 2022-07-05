import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";

import { Home } from "../screens/Home/Home";
import { Profile } from "../screens/Profile/Profile";
import { Discussion } from "../screens/Discussion/discussion";
import { Messages } from '../screens/Messages';
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
<<<<<<< HEAD
=======
        description: string;
        Mail : undefined;
        Username : undefined;
        Lastname : undefined;
        Firstname : undefined;
        Account_Id : undefined;
>>>>>>> 5118f769906e20a2c7ba56091c575fd5c88acbf3
    };
    Messages: undefined;
    Discussion: undefined;
   
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Connexion" 
                    component={Login} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />  
                <Stack.Screen name="Profil" 
                    component={Profile} 
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
<<<<<<< HEAD
                <Stack.Screen name="Messages" 
                    component={Messages} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />
                <Stack.Screen name="Discussion" 
                    component={Discussion} 
                    options = {{ 
                        animation: "slide_from_right",
                        headerStyle: tw.style('bg-blue-500'),
                        headerTintColor: "#FFF"
                    }}
                />
=======
                
>>>>>>> 5118f769906e20a2c7ba56091c575fd5c88acbf3
            </Stack.Group>
        </Stack.Navigator>
    );
};