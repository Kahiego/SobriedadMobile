import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View, Button} from "react-native";
import { RouteParams } from "../../navigation/RootNavigator";

interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = ({}) => {
  const route = useRoute<RouteProp<RouteParams>>();
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  return (
    <View>
      <Text>{route.params?.title}</Text>
      <Text>{route.params?.description}</Text>
      <Button 
        title="Home"
        onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}