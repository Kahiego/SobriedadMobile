import React from 'react';

import { Colors } from './../components/styles';
const {primary, tertiary} = Colors;

  // React navigation
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
    //screens 
import Login from './../screeens/Login';
import Signup from './../screeens/Signup';
import Accueil from './../screeens/Accueil';


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
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default RootStack;