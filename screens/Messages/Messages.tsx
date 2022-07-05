import React, { useState } from "react";
import { Image, Text, View, Button, StyleSheet, ScrollView, Pressable } from "react-native";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteParams } from "../../navigation/RootNavigator";
import { Dimensions } from 'react-native';

interface MessagesProps {}

export const Messages: React.FunctionComponent<MessagesProps> = ({}) => {
    return (
        <ScrollView>
            <View>
                <CardMessages pp="" username="Bjorn" lastmessage="hello" />
                <CardMessages pp="" username="Kelly" lastmessage="hello" />
                <CardMessages pp="" username="Sylvain" lastmessage="hello" />
                <CardMessages pp="" username="Cyril" lastmessage="hello" />
            </View>
        </ScrollView>
    );
}

const CardMessages = ({pp, username, lastmessage}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    return (
        <Pressable onPress={() => navigation.navigate('Discussion')}>
            <View style={styles.containerMessages}>
                <View>
                    <Pressable onPress={() => navigation.navigate('Profil', {title: username})}>
                        <Image source={require("../../assets/avatar1.png")} style={styles.imagePPStyle} />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.usernameStyle}>{username}</Text>
                    <Text style={styles.contentText}>{lastmessage}</Text>
                </View>
            </View>
        </Pressable>
    )
};
    

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
    containerMessages: {
        width: deviceWidth-25,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: "#c0dffc",
        borderRadius: radius,
    },
    imagePPStyle: {
        height: 75,
        width: 75,
        borderRadius: radius,
        opacity: 0.9,
    },
    usernameStyle: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 12,
        marginVertical: 4,
    },
    contentText: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 7,
        fontSize: 14,
    },
});