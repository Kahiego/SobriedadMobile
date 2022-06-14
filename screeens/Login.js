import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';

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
} from './../components/styles';
import {View} from 'react-native';
    
        //Colors
const {brand, darklight} = Colors;


        //page de Login 
const Login = ({navigation}) => {
        const{hidePassword, setHidePassword} = useState(true)

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/logo.png')}/>
                    <PageTitle> Resources Relationnelles </PageTitle>
                    <SubTitle> CONNEXION  </SubTitle>
                        
                    <Formik
                        initialesValues={{ email: '', password: ''}}
                        onSubmit={(values) =>{
                            console.log(values);  
                            navigation.navigate("Accueil");
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit,values}) => (
                        <StyledFormArea>

                            <MyTextInput
                                label="Adresse e-mail"
                                icon="mail"
                                placeholder="user@gmail.com"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values?.email}
                                keyboardType='email-address'
                                
                            />

                            <MyTextInput
                                label="Mot de passe"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values?.password}
                                securityTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                                
                            <StyledButton onPress = {() => navigation.navigate('Accueil')}>
                                <ButtonText>Se connecter</ButtonText>   
                            </StyledButton>

                            <ExtraView>
                                <ExtraText>Vous n’avez pas de compte ?</ExtraText>
                               <TextLink onPress={() =>  navigation.navigate('Signup')}>
                                    <TextLinkContent>Inscrivez-vous</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                            

                        </StyledFormArea>)}
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