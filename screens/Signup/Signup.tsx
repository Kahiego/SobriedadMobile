import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Fragment}from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
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

interface SignupProps {}


function test(Username: string,Mail: string,Password: string): void {
   alert("Username : "+Username+" mail : "+Mail+" Password : "+Password);
}

export const Signup: React.FunctionComponent<SignupProps> = ({}) => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const{ hidePassword, setHidePassword } = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle> Resources Relationnelles </PageTitle>
                <SubTitle> INSCRIPTION </SubTitle>           
                <Formik
                    initialValues={{ fullname: '',email: '', password: '', confirmPassword: '' }}
                    onSubmit={values => { alert(JSON.stringify(values))}}
                >
                    {({ handleChange, values, handleSubmit, handleBlur }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Pseudo"
                                icon="person"
                                placeholder="Victor Hugo"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                value={values.fullname}
                            />
                            <MyTextInput
                                label="Adresse e-mail"
                                icon="mail"
                                placeholder="user@gmail.com"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType='email-address'   
                             />
                            <MyTextInput
                                label="Mot de passe"
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
                            <MyTextInput
                                label="Confirmer le mot de passe"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <StyledButton >
                                <Button 
                                 title="S'incrire" onPress={() => test(values.fullname,values.email,values.password)}
                                 /> 
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Vous avez un compte ?</ExtraText>
                                <TextLink >
                                    <TextLinkContent> Connectez-vous </TextLinkContent>
                                </TextLink>
                                
                            </ExtraView>
                        </StyledFormArea>
                    )}
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
