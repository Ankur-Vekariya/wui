import {
  Button,
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

const ChannelItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(item);

  return (
    <View
      onPress={() => setModalVisible(!modalVisible)}
      style={styles.channelContainerItem}
    >
      <Image
        style={styles.image}
        source={{ uri: item?.image?.uri }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
        {item?.firstName}
      </Text>
      <TouchableOpacity style={styles.channelButton}>
        <Text style={{ textAlign: "center" }}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChannelItem;

const styles = StyleSheet.create({
  channelContainerItem: {
    minWidth: 130,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 20,
    padding: 10,
    gap: 10,
  },
  channelButton: {
    backgroundColor: theme.lightYello,
    borderRadius: 100,
    padding: 6,
    width: 100,
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
    width: 80,
    height: 80,
    backgroundColor: "#0553",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.white,
  },
});
