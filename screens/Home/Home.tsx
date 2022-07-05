import React, { useState } from "react";
import { Image, Text, View, Button, StyleSheet, ScrollView } from "react-native";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteParams } from "../../navigation/RootNavigator";
import tw from 'tailwind-react-native-classnames';

// ------------------ COMPONENTS ---------------------- //
import  PublicationCard  from "../../components/PublicationCard";

interface HomeProps {}



export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

   function Publication() {
    <PublicationCard pp="../../assets/avatar1.png" username="Bjorn" title="PUB TITLE" content="CONTENT" imageurl="../../assets/LogoSOT.png" like="32" comment="5" />
}
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Home</Text>
          <Button 
            title="Profile" onPress={() => navigation.navigate('Profil', {title: "PROFIL"})}/>
            <Button title="Login" onPress={() => navigation.navigate('Inscription')}/>
            <Button title="Messages" onPress={() => navigation.navigate('Messages')}/>
          <View>
            {Publication()}
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