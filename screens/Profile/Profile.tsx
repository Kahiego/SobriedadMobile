import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, Image, ImageBackground, Text, View,
Button, StyleSheet, FlatList, Pressable, SafeAreaView, ScrollView} from "react-native";
import { RouteParams } from "../../navigation/RootNavigator";
//icons
import {Octicons, Ionicons} from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer, 
  PageLogo, 
  PageTitle, 
  SubTitle, 
  StyledFormArea, 
  LeftIconButton, 
  LeftIconInfo,
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

import PublicationCard from '../../components/PublicationCard';
import Comment from '../../components/Comment';

interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = ({}) => {
  const route = useRoute<RouteProp<RouteParams>>();
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <ImageBackground  source={require('../../assets/LogoSOT.png')} style={styles.imageStyle}></ImageBackground>
          <Image source={require('../../assets/avatar1.png')} style={styles.imageAvatar}></Image>
          <Text style={styles.profileName}>Bjorn </Text> 
          <View style={styles.catchphraseContainer}>
            <Text style={styles.catchphrase}> c'est ma phrase d'accroche !</Text>
            <Text style={styles.catchphrase}> c'est ma bio wesh !</Text>

          </View>
          <View style={styles.hr}></View>
          <ButtonProfil
            label="Demande d'ami"
            icon="person-add"
          />  
          <View style={styles.hr}></View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <InfoProfil label="Vincent MAES" icon="person" />
          <InfoProfil label="Mail" icon="mail" />
        </View>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.friendContainer}>
        <FriendCard username="Edgar" />
        <FriendCard username="Julien" />
        <FriendCard username="Adrien" />
        <FriendCard username="Pleo" />
        <FriendCard username="Amélie" />
        <FriendCard username="Damien" />
      </View>
      <View style={styles.hr}></View>
      <View>
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>Publications</Text>
        <PublicationCard pp="../../assets/avatar1.png" username="Bjorn" title="PUB TITLE" content="CONTENT" imageurl="../../assets/LogoSOT.png" like="32" comment="5" />
      </View>
      <View>
        <Text>{route.params?.title}</Text>
        <Text>{route.params?.description}</Text>
        <Button 
          title="Accueil"
          onPress={() => navigation.navigate('Accueil')}/>
      </View>
    </ScrollView>
  );
}

const ButtonProfil = ({label, icon, ...props}) => {
  return (
      <View>
         <LeftIconButton>
            <Octicons name={icon} size={20} color="white"/>
          </LeftIconButton>
          <Pressable style={styles.buttons}>
            <Text style={styles.textButtons}>{label}</Text>
          </Pressable>
      </View>
  );
};

const InfoProfil = ({label, icon }) => {
  return (
      <View style={{marginTop: '15px',}}>
         <LeftIconInfo>
            <Octicons name={icon} size={22} color="black"/>
          </LeftIconInfo>
          <Text style={{fontSize: 18, textAlign: 'left', marginLeft: '30px',}}>{label}</Text>
      </View>
  );
};

const FriendCard = ({username}) => {
  return (
    <View>
      <Image source={require('../../assets/avatar2.png')} style={styles.imageFriend}/>
      <Text style={{textAlign: 'center'}}>{username}</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: deviceWidth,
  },
  infoContainer: {
    width: deviceWidth - 50,
    marginHorizontal: 20,
  },
   imageStyle: {
    width: deviceWidth,
    height: '100px',
    resizeMode: "cover",
    alignItems: 'center',
    marginHorizontal : 10,
    borderRadius : radius,
  },
  content : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: deviceWidth,
    marginTop: 25,
  },
  imageAvatar : {
    marginTop: '-35px',
    width: '100px', 
    height: '100px',
    borderRadius : radius,
  },
  profileName : {
    fontSize : 25,
    fontWeight: 'bold',
  },
  catchphraseContainer: {
    width: "80%",
    marginHorizontal: 25,
  },
  catchphrase: {
    marginTop: 10,  
    fontSize : 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  hr: {
   marginTop : 20,
   borderBottomColor: 'black',
   borderBottomWidth: 0.5,
   width: "80%",
   marginHorizontal: 25,
  },
  buttons: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(50,150,255)',
  }, 
  textButtons: {
    marginLeft: 5,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  friendContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 5,
    padding: 5,
  },
  imageFriend: {
    width: '100px',
    height: '100px',
    borderRadius: radius,
    margin: 5,
  },
});