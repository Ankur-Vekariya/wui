import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import theme from "../utils/theme";
import { useLocalSearchParams } from "expo-router";
import { Entypo, Ionicons } from "@expo/vector-icons";

const data = [
  {
    type: "received",
    message: "hii",
  },
  {
    type: "sent",
    message: "hello",
  },
  {
    type: "received",
    message: "hii",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "received",
    message: "hello",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "received",
    message: "hello",
  },
  {
    type: "received",
    message: "hii",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "received",
    message: "hello",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "received",
    message: "hii",
  },
  {
    type: "sent",
    message: "hello",
  },
  {
    type: "received",
    message: "hii",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "received",
    message: "hello",
  },
  {
    type: "received",
    message: "hello",
  },
  {
    type: "sent",
    message: "hii",
  },
  {
    type: "received",
    message: "hii",
  },
  {
    type: "sent",
    message: "hello",
  },
  {
    type: "received",
    message: "hii",
  },
];

const Chat = () => {
  const { number } = useLocalSearchParams();
  const [message, setMessage] = useState("");

  console.log("item===============", number);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#F0F0F0",
          borderRadius: 100,
          height: 45,
          flexDirection: "row",
          padding: 10,
          fontSize: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Ask Meta Ai or Search"
        />
        {message !== "" && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                `whatsapp://send?text=${message}&phone=${number}`
              );
              setMessage("");
            }}
          >
            <Ionicons name="send" size={24} color={theme.lightGreen} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: item.type === "received" ? "flex-start" : "flex-end",
              marginVertical: 5,
            }}
          >
            <Text
              style={[
                styles.description,
                {
                  textAlign: item.type === "received" ? "left" : "right",
                },
              ]}
            >
              {item.message}
              <Text
                style={[{ paddingLeft: 30, fontSize: 10 }]}
              >{`${new Date().getHours()}:${new Date().getMinutes()}`}</Text>
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 15,
    backgroundColor: theme.chatBack,
  },
  description: {
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: theme.lightYello,
    padding: 10,
  },
});
