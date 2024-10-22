import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import theme from "../utils/theme";
import { router } from "expo-router";

const HeaderRight = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
      }}
    >
      <MaterialIcons name="qr-code-scanner" size={22} color={"black"} />
      <Feather name="camera" size={22} color={"black"} />
      <TouchableOpacity onPress={() => router.push("/settings")}>
        <Entypo name="dots-three-vertical" size={22} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
