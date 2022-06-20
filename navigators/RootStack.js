import React from 'react';

import { Colors } from './../components/styles';
const {primary, tertiary} = Colors;

  // React navigation
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

  
    //screens 
import Login from './../screeens/Login/Login';
import Signup from './../screeens/Login/Signup';
import Accueil from '../screeens/Login/Accueil';
import  Home  from "../screeens/Home/Home";
import  Profile  from "../screeens/Profile/Profile";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
            <NavigationContainer>
                 <Stack.Navigator
                    ScreenOptions={{
                        headerStyle: {
                            background: 'transparent'
                        },
                        headerTintColor: tertiary,
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeftContainerStyle: {
                            paddingLeft: 20
                        }
                    }}
                    initialRouteName="Login"
                >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Signup" component={Signup}/>
                    <Stack.Screen name="Accueil" component={Accueil}/>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default RootStack;