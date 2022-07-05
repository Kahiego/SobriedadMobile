import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, Image, ImageBackground, Text, View,
Button, StyleSheet, FlatList, Pressable, SafeAreaView, ScrollView} from "react-native";
import { RouteParams } from "../../navigation/RootNavigator";

interface MessageProps {}

export const Discussion: React.FunctionComponent<MessageProps> = ({}) => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    return (
        <ScrollView>
            <View>
                <CardMessageMe pp="" username="Bjorn" lastmessage="lorem ipsum"/>.
                <CardMessageYou pp="" username="Pleo" lastmessage="lorem ipsum"/>
            </View>
        </ScrollView>
    );
}

const CardMessageYou = ({pp, username, lastmessage}) => {
    return (
        <View style={styles.CommentaireContainerYou}>
            <View style={styles.headerStyleYou}>
                <Image source={require("../../assets/avatar1.png")} style={styles.imagePPStyle} />
                <Text style={styles.usernameStyle}>{username}</Text>
            </View>
            <View style={styles.infoStyle}>
                <Text style={styles.contentTextYou}>{lastmessage}</Text>
            </View>
        </View>
    )
};

const CardMessageMe = ({pp, username, lastmessage}) => {
    return (
        <View style={styles.CommentaireContainerMe}>
            <View style={styles.headerStyleMe}>
                <Text style={styles.usernameStyle}>{username}</Text>
                <Image source={require("../../assets/avatar1.png")} style={styles.imagePPStyle} />
            </View>
            <View style={styles.infoStyle}>
                <Text style={styles.contentTextMe}>{lastmessage}</Text>
            </View>
        </View>
    )
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
    CommentaireContainerYou: {
        width: deviceWidth - 25,
        marginTop: 10,
        backgroundColor: "#c0dffc",
        borderRadius: radius,
    },
    CommentaireContainerMe: {
        width: deviceWidth -25,
        marginTop: 10,
        marginLeft: 25,
        backgroundColor: "#c0dffc",
        borderRadius: radius,
    },
    headerStyleYou: {
        flexDirection:'row', 
        flexWrap:'wrap',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    headerStyleMe: {
        flexDirection:'row',
        justifyContent: 'flex-end', 
        flexWrap:'wrap',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    imagePPStyle: {
        height: 30,
        width: 30,
        borderRadius: radius,
        opacity: 0.9,
    },
    usernameStyle: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 12,
        marginVertical: 4,
    },
    infoStyle: {
        backgroundColor: "#FFF",
        borderRadius: radius,
        marginHorizontal: 10,
        marginVertical: 5,
    }, 
    contentTextYou: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 7,
        fontSize: 12,
    },
    contentTextMe: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 7,
        fontSize: 12,
        textAlign: 'right'
    },
});