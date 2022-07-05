import React, { useState } from "react";
import { Image, Text, View, Button, StyleSheet, ScrollView } from "react-native";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteParams } from "../../navigation/RootNavigator";
import tw from 'tailwind-react-native-classnames';
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

// ------------------ COMPONENTS ---------------------- //
import  PublicationCard  from "../../components/PublicationCard";

interface HomeProps {}


export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  function getPost(): void {

var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

axios({
  method: 'get',
  url: 'http://api/getPosts2.php',
  crossdomain: true,
  withCredentials: false,
  headers:headers
})
  .then(response => {
    
    var a = response.data;
    console.log(response)
    const objstring = JSON.stringify(a);
    const jsonobj = JSON.parse(objstring);
 
    for(const prop in jsonobj){
      console.log(prop);
      var obj = jsonobj[prop]
      var obj2 = obj["Response"]

      var post_id = obj2["post_id"];
      var account_id = obj2["account_id"];
      var categorie_id = obj2["categorie_id"];
      var message = obj2["message"];
      var post_date = obj2["post_date"];
      var post_picture = obj2["post_picture"];
      var reported = obj2["reported"];
      var title = obj2["title"];

      console.log(post_id);
      console.log(account_id);
      console.log(categorie_id);
      console.log(post_date);
      console.log(message);
      console.log(post_picture);
      console.log(reported);
      console.log(title);
 //    PublicationCard(); 
    }
  })
   .catch(function (error) {
    console.log(error);
  })
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
<<<<<<< HEAD
            title="Profile" onPress={() => navigation.navigate('Profil', {title: "PROFIL"})}/>
            <Button title="Login" onPress={() => navigation.navigate('Inscription')}/>
            <Button title="Messages" onPress={() => navigation.navigate('Messages')}/>
=======
            title="Profile" onPress={() => navigation.navigate('Profil', {
              title: "PROFIL", description: "description du profil de la personne"
          })}/>
            <Button 
            title="Post" onPress={() => getPost()}/>
            <Button 
            title="Inscription" onPress={() => navigation.navigate('Inscription')}/>
            <Button 
            title="Login" onPress={() => navigation.navigate('Connexion')}/>
>>>>>>> 5118f769906e20a2c7ba56091c575fd5c88acbf3
          <View>
            {getPost()}
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