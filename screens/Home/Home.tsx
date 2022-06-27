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

  function getPost(): void {
    let User = {
   
    };

   var apiURL="http://api/getPosts2.php";

   var headers={
                'Accept':'application/json',
               'Content-Type':'application.json'
            };
   fetch(apiURL,
            {
                method:'POST',
                headers:headers,
                body: JSON.stringify(User)
            }
            )
            .then((response)=>response.json())
            .then((response)=>
            {
              alert(response[0].Message);
            }
            )
            alert(response[0].Message);
  
}

   function Publication() {
    <PublicationCard pp="../../assets/avatar1.png" username="Bjorn" title="PUB TITLE" content="CONTENT" imageurl="../../assets/LogoSOT.png" like="32" comment="5" />
   }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Home</Text> 
          <Button 
            title="Profile" onPress={() => navigation.navigate('Profil', {
              title: "PROFIL", description: "description du profil de la personne"
          })}/>
            <Button 
            title="Post" onPress={() => getPost()}/>
            <Button 
            title="Login" onPress={() => navigation.navigate('Inscription')}/>
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