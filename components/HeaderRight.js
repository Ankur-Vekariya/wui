import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import theme from "../utils/theme";
import { router } from "expo-router";

const HeaderRight = ({ search = false }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
      }}
    >
      <MaterialIcons name="qr-code-scanner" size={22} color={"black"} />
      <Feather name="camera" size={22} color={"black"} />
      {search && <Ionicons name="search-sharp" size={24} color="black" />}
      <TouchableOpacity onPress={() => router.push("/settings")}>
        <Entypo name="dots-three-vertical" size={22} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
