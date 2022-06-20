import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
    LeftIcon, 
    StyledInputLabel, 
    StyledTextInput, 
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../../components/styles';

interface ProfileProps {}

export type RouteParams = {
    Home: undefined;
    Profile: {
        title: string;
        description: string;
    };
};

export const Profile  = ({navigation}) => {
  const route = useRoute<RouteProp<RouteParams>>();

  return (
    <View>
      <Text>{route.params?.title}</Text>
      <Text>{route.params?.description}</Text>

      <StyledButton onPress = {() => navigation.navigate('Home')}>
            <ButtonText>Home</ButtonText>   
      </StyledButton>
      <Button 
        title="Home"
        onPress={() => navigation.navigate('Home')}/>
    </View>
  );
  

}