import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Fragment}from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
// React navigation
import { CurrentRenderContext, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RouteParams } from "../../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
  
//formik (creation de formulaire)
import {Formik}  from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

//importer les composants (CSS)
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

    
//Colors
const {brand, darklight} = Colors;

//page de Login 
interface LoginProps {}

export const Login: React.FunctionComponent<LoginProps> = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const{ hidePassword, setHidePassword } = useState(true);

function logUser(Mail: string,Password: string): void {

    let User = {
      Mail: Mail,
      Password: Password
    };

   axios.post('http://api/getUser2.php', User)
      .then(function (response) {
        const obj = JSON.parse(JSON.stringify(response.data))
        const user = obj["0"]["Response"];

        console.log(user["mail"]);
        console.log(user["username"]);
        console.log(user["lastname"]);
        console.log(user["firstname"]);
        console.log(user["account_id"]);

        navigation.navigate('Accueil',{
            User: user,Mail: user["mail"], Username: user["username"],Lastname: user["lastname"],Firstname: user["firstname"],Account_Id: user["account_id"]
        });    
      })

      .catch(function (error) {
        console.log(error);
      });
};

    return (
        <ScrollView>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('../../assets/logo.png')}/>
                    <PageTitle> Resources Relationnelles </PageTitle>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => { alert(JSON.stringify(values))}}
                    >
                        {({ handleChange, values, handleSubmit, handleBlur }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email Adress"
                                    icon="mail"
                                    placeholder="user@gmail.com"
                                    placeholderTextColor={darklight} 
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType='email-address'
                                />
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={darklight} 
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <StyledButton >
                                    <Button 

                                 title="Connexion" onPress={() => logUser(values.email,values.password)}
                                 /> 
                                </StyledButton>
                                <ExtraView>
                                    <ExtraText>Vous n’avez pas de compte ?</ExtraText>
                                </ExtraView>
                                <TextLink onPress={() => navigation.navigate('Inscription')}>
                                    <TextLinkContent>Inscrivez-vous</TextLinkContent>
                                </TextLink>
                            </StyledFormArea>
                        )}
                    </Formik> 
                </InnerContainer>
            </StyledContainer>
        </ScrollView>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword,setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight}/>
                </RightIcon>
            )}
        </View>
    );
};
    