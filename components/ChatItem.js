import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ChatItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity style={styles.item} onPress={() => router.push("/chat")}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image
          style={styles.image}
          source={{ uri: item?.image?.uri }}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text
            style={styles.description}
          >{`${new Date().getHours()}:${new Date().getMinutes()}`}</Text>
        </View>
        <Text style={styles.description}>{item?.firstName}</Text>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                gap: 10,
                padding: 4,
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
              <Text style={styles.title}>{item?.name}</Text>
            </TouchableOpacity>
            <Image
              style={{ height: 250, width: 250, borderRadius: 0 }}
              source={{ uri: item?.image?.uri }}
              placeholder={{ blurhash }}
              contentFit="cover"
              //   transition={1000}
            />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginVertical: 6,
    gap: 10,
    paddingVertical: 6,
    // borderWidth: 1,
    // borderColor: "red",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#0553",
    borderRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
