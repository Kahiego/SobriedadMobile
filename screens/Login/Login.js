import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Fragment}from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Button } from 'react-native-elements'





  // React navigation
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
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
    const Login = () => {
            const{hidePassword, setHidePassword} = useState(true)

        return (
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                        <PageLogo resizeMode="cover" source={require('../../assets/avatar1.png')}/>
                        <PageTitle> Resources Relationnelles </PageTitle>
                        <SubTitle> CONNEXION  </SubTitle>

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
                <ButtonText>Se connecter</ButtonText>   
                </StyledButton>

                <ExtraView>
                <ExtraText>Vous n’avez pas de compte ?</ExtraText>
                <TextLink>
                    <TextLinkContent>Inscrivez-vous</TextLinkContent>
                </TextLink>
                </ExtraView>

            </StyledFormArea>
    )
    }
            </Formik>
                        
                </InnerContainer>
            </StyledContainer>
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
    
export default Login;