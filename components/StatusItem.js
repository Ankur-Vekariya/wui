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
import theme from "../utils/theme";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const StatusItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(item);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        router.push({
          pathname: "/chat",
          params: { number: JSON.stringify(item?.phoneNumbers[0]?.number) },
        })
      }
    >
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={{ maxWidth: 75 }}
      >
        <View
          style={{
            padding: 1,
            borderColor: theme.lightGreen,
            borderWidth: 1.5,
            backgroundColor: "#0553",
            borderRadius: 100,
          }}
        >
          <Image
            style={styles.image}
            source={{ uri: item?.image?.uri }}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {item?.firstName}
        </Text>
      </TouchableOpacity>

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

export default StatusItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginVertical: 6,
    gap: 10,
    paddingVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  image: {
    width: 65,
    height: 65,
    backgroundColor: "#0553",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
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
