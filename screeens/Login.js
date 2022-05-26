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
        Colors
} from './../components/styles';
import {View} from 'react-native';
    
        //Colors
const {brand, darklight} = Colors;


        //page de Login 
const Login = () => {
        const{hidePassword, setHidePassword} = useState(true)

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/logo.png')}/>
                    <PageTitle> Resources Relationnelles </PageTitle>
                    <SubTitle> Account Login  </SubTitle>
                        
                    <Formik
                        initialesValues={{ email: '', password: ''}}
                        onSubmit={(values) =>{
                            console.log(values);
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>

                            <MyTextInput
                                label="Email Adress"
                                icon="mail"
                                placeholder="user@gmail.com"
                                placeholderTextColor={darklight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value = {values?.email}
                                keyboardType='email-address'
                                
                            />

                            <MyTextInput
                                label="Password"
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
                                
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>   
                            </StyledButton>
                            
                            

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