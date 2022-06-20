import React,  { useState } from "react";
import { Dimensions, Text, View, StyleSheet, Image, Modal, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

interface CommentaireProps {
    pp: string,
    username : string,
    content : string,
}

const CommentaireComp: React.FunctionComponent<CommentaireProps> = ( {pp, username, content }) => {
    const [modalVisible, setModalVisible] = useState(false);
     
     return (
        <View style={styles.CommentaireContainer}>
            <View style={styles.headerStyle}>
                    <Image style={styles.imagePPStyle} source={require('../assets/avatar1.png')} />
                    <Text style={styles.usernameStyle}>{username}</Text>
                </View>
                <View style={styles.infoStyle}>
                    <Text style={styles.contentText}>{content}</Text>
                </View>
        </View> 
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
    CommentaireContainer: {
        width: deviceWidth - 25,
        marginBottom: 10,
        backgroundColor: "#c0dffc",
        borderRadius: radius,
    },
    headerStyle: {
        flexDirection:'row', 
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
    contentText: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 7,
        fontSize: 12,
    },
});

export default CommentaireComp;