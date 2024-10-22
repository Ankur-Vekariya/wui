import React from "react";
import { Stack } from "expo-router";
import theme from "../utils/theme";
import HeaderRight from "../components/HeaderRight";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.white,
        },
        headerTitleStyle: {
          color: theme.lightGreen,
          fontSize: 24,
          fontWeight: "bold",
        },
        headerRight: () => <HeaderRight />,
        contentStyle: { backgroundColor: theme.white },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="index"
        options={{
          title: "WhatsApp",
        }}
      /> */}
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          title: "Chat",
          animation: "ios",
        }}
      />
    </Stack>
  );
}
