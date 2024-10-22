import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import theme from "../utils/theme";

const Chat = () => {
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
  return (
    <SafeAreaView style={styles.container}>
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
