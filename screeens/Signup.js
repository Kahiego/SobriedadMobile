import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';

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
const Signup = ({navigation}) => {
        const{hidePassword, setHidePassword} = useState(true)

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                    <PageTitle> Resources Relationnelles </PageTitle>
                    <SubTitle> INSCRIPTION </SubTitle>
                        
                    <Formik
                        initialesValues={{ fullname: '',email: '', password: '',confirmPassword:''}}
                        onSubmit={(values) =>{
                            console.log(values);
                            navigation.navigate("Accueil");
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>

                            <MyTextInput
                                label="Pseudo"
                                icon="person"
                                placeholder="Victor Hugo"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                value = {values?.fullname}                                        
                            /> 
                        
                            <MyTextInput
                                label="Adresse e-mail"
                                icon="mail"
                                placeholder="user@gmail.com"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value = {values?.email}
                                keyboardType='email-address'
                                
                            />

                            <MyTextInput
                                label="Mot de passe"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value = {values?.password}
                                securityTextEntry={hidePassword}
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
                                value = {values?.confirmPassword}
                                securityTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                                
                            <StyledButton onPress={() => navigation.navigate('Accueil')}>
                                <ButtonText>S'inscrire</ButtonText>   
                            </StyledButton>

                            <ExtraView>
                                <ExtraText>Vous avez un compte ?</ExtraText>
                               <TextLink onPress = {() => navigation.navigate('Login')}>
                                    <TextLinkContent> Connectez-vous </TextLinkContent>
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
export default Signup;