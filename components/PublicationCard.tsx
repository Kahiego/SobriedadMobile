import React,  { useState } from "react";
import { Dimensions, Text, View, StyleSheet, Image, Modal, Pressable,  ScrollView, TextInput  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

// -------------- COMPONENT ------------------- //
import  CommentaireComp  from "./Comment"


interface PublicationProps {
    pp: string,
    username : string,
    imageurl : string,
    title : string,
    content : string,
    like : string,
    comment : string
}

const PublicationCard: React.FunctionComponent<PublicationProps> = ( {pp, username, imageurl, title, content, like, comment }) => {
    const [modalVisible, setModalVisible] = useState(false);
     
     return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}>
                
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TextInput style={styles.InputComment} multiline={true} numberOfLines={4} value="" placeholder="Un commentaire ?..."></TextInput>
                                
                                <CommentaireComp pp="../../assets/avatar1.png" username="Bjorn"  content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
                                <CommentaireComp pp="../../assets/avatar1.png" username="Vincent"  content="CONTENT"/>
                                <CommentaireComp pp="../../assets/avatar1.png" username="Imad"  content="CONTENT"/>
                                <CommentaireComp pp="../../assets/avatar1.png" username="Julien"  content="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                <CommentaireComp pp="../../assets/avatar1.png" username="Adrien"  content="CONTENT"/>
                                <CommentaireComp pp="../../assets/avatar1.png" username="Pleo"  content="CONTENT"/>
                                <CommentaireComp pp="../../assets/avatar1.png" username="Amélie"  content="CONTENT"/>
    
                                <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.ButtonCancel}>
                                    <Text>Annuler</Text>
                                </Pressable>     
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Modal>

            <View style= {styles.cardContainer}>
                <View style={styles.headerStyle}>
                    <Image style={styles.imagePPStyle} source={require('../assets/avatar1.png')} />
                    <Text style={styles.usernameStyle}>{username}</Text>
                </View>

                <Image style={styles.imageStyle} source={require('../assets/LogoSOT.png')} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text>{content}</Text>
                </View>
                <View style={styles.containerFooter}>
                    <View style={styles.contentFooter}>
                        <Icon.Button name="heart" backgroundColor="#4ea6f4"></Icon.Button>
                        <Text style={styles.FooterText}> {like} </Text>
                    </View>
                    <View style={styles.contentFooter}>
                        <AppButton onPress={() => setModalVisible(true)} icon="comment" backgroundColor="#4ea6f4"/>
                        <Text style={styles.FooterText}> {comment} </Text>
                    </View>
                </View>
            </View>   
        </View> 
    );
};

const AppButton = ({ onPress, icon, backgroundColor }) => (
    <View>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
      >
      </Icon.Button>
    </View>
  );

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25,
        marginBottom: 10,
        backgroundColor: "#4ea6f4",
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - 25,
        opacity: 0.9,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle : {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
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
    containerFooter: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    contentFooter: {
        flexDirection: 'row',
        marginRight: 10,
    },
    FooterText : {
        flexDirection: 'row',
        marginVertical: 7,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      ButtonCancel: {
          backgroundColor: "#0257a7",
          paddingHorizontal: 14,
          paddingVertical: 7,
          borderRadius: radius,
      },
      InputComment: {
        width: deviceWidth - 50,
        marginBottom: 10,
        borderRadius: radius,
        backgroundColor: "#c0dffc",
          
      }
});

export default PublicationCard;