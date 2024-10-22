import { View, Text } from "react-native";
import React from "react";

const Chat = () => {
  const data = [
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
      message: "hii",
    },
  ];
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
