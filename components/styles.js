import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

 // colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darklight: '#9CA3AF',
    brand: '#03989E',
    green: '#10B981',
    red:'#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
   flex:1;
   padding:25px;
   padding-top: ${StatusBarHeight + 30}px;
   background-color: ${primary};
`;

   //design 

export const InnerContainer = styled.View`
   flex:1;
   width: 100%;
   align-items: center;
`;
   //Page d'accueil
export const AccueilContainer = styled(InnerContainer)`
   padding: 25px;
   padding-top: 200px;
   justify-content: center;
`;
     //Page d'accueil (not used)
export const Avatar = styled.Image`
width: 100px;
height: 100px;
margin: auto;
border-radius: 50px;
border-width: 2px;
border-color: ${secondary};
margin-bottom: 10px;
margin-top: 10px;
`;
     //Page d'accueil (not used)
export const AccueilImage = styled.Image`
   min-width: 100%;
   height: 50%;
`;

   //Logo (image)
export const PageLogo = styled.Image`
   width: 250px;
   height: 200px;
`;

   // Title
export const PageTitle = styled.Text`
   font-size:30px;
   text-align: center;
   font-weight: bold;
   color: ${brand};
   padding: 10px;

   ${(props) => props.welcome && `
   font-size:35px;
   `}
`;
   // Sous-titre
export const SubTitle = styled.Text`
   font-size: 18px;
   margin-bottom: 20px;
   letter-spacing: 1px;
   font-weight: bold;
   color: ${tertiary};
  
`;

export const StyledFormArea = styled.View`
   width: 90%;
`;

export const StyledTextInput = styled.TextInput`
   background-color: ${secondary};
   padding: 15px;
   padding-left: 55px;
   padding-right: 55px;
   border-radius: 5px;
   font-size: 16px;
   height: 60px;
   margin-vertical: 3px;
   margin-bottom: 10px;
   color: ${tertiary};
`;
      //Label(titres des champs)
   
export const StyledInputLabel = styled.Text`
   color: ${tertiary};
   font-size: 13px;
   text-align: left;
`;

   //Icon

export const LeftIcon = styled.View`
   left: 15px;
   top: 38px;
   position: absolute;
   z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
   right: 15px;
   top: 38px;
   position: absolute;
   z-index: 1;
`;

   //Bouton login
export const StyledButton = styled.TouchableOpacity`
   padding: 15px;
   background-color: ${brand};
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   margin-vertical: 5px;
   height:60px;
`;
export const ButtonText = styled.Text`
   color: ${primary};
   font-size: 16px;
`;
   //ligne d'inscrtption
export const ExtraView = styled.View`
   justify-content: center;
   flex-direction: row;
   align-items: center;
   padding: 10px;
`;
export const ExtraText = styled.Text`
   justify-content: center;
   align-content: center;
   color: ${tertiary};
   font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
   justify-content: center;
   align-items: center;
`;
export const TextLinkContent = styled.Text`
   color: ${brand};
   font-size: 15px;
`;