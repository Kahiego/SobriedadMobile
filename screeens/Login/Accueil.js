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
        TextLinkContent,
        AccueilContainer,
        AccueilImage,
        Avatar

} from '../../components/styles';
import {View} from 'react-native';
    
        //Colors
const {brand, darklight} = Colors;


        //page de Login 
const Accueil = ({navigation}) => {
        const{hidePassword, setHidePassword} = useState(true)

    return (
       <>
            <StatusBar style="dark" />
            <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('../../assets/logo.png')}/>
                    <PageTitle> Resources Relationnelles </PageTitle>
                    <SubTitle> Accueil</SubTitle>

                    <AccueilContainer>
                       
                        <StyledFormArea>
                            <StyledButton onPress={() => navigation.navigate('Login')}>
                                <ButtonText>Se déconnecter</ButtonText>   
                            </StyledButton>
                        </StyledFormArea>
                    </AccueilContainer>
            </InnerContainer>
        </>
    );
}

export default Accueil;