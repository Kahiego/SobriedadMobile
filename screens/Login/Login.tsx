import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Fragment}from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
// React navigation
import { CurrentRenderContext, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RouteParams } from "../../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

  
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
                                    <ButtonText onPress={() => navigation.navigate('Accueil')}>Se connecter</ButtonText>   
                                </StyledButton>
                                <ExtraView>
                                    <ExtraText>Vous n’avez pas de compte ?</ExtraText>
                                </ExtraView>
                                <TextLink onPress={() => navigation.navigate('Signup')}>
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
    