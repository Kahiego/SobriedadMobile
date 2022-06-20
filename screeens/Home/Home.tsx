import React, { useState } from "react";
import { Image, Text, View, Button, StyleSheet, ScrollView } from "react-native";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import tw from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ------------------ COMPONENTS ---------------------- //
import  PublicationCard  from "../../components/PublicationCard";

interface HomeProps {}

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

interface HomeProps {}

export const Home = ({navigation}) => {
  
 
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Home</Text>
          <Button 
            title="Profile" onPress={() => navigation.navigate('Profile', {
              title: "PROFILE", description: "description du profil de la personne"
          })}/>
          <View>
            <PublicationCard pp="../../assets/avatar1.png" username="Bjorn" title="PUB TITLE" content="CONTENT" imageurl="../../assets/LogoSOT.png" like="32" comment="5" />
            <PublicationCard pp="../../assets/avatar1.png" username="Bjorn" title="PUB TITLE" content="CONTENT" imageurl="../../assets/LogoSOT.png" like="32" comment="5" />
            <PublicationCard pp="../../assets/avatar1.png" username="Bjorn" title="PUB TITLE" content="CONTENT" imageurl="../../assets/LogoSOT.png" like="32" comment="5" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  pub : {
    marginBottom: 5,
  }
});