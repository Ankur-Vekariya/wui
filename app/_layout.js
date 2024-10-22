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
        contentStyle: { paddingHorizontal: 15, backgroundColor: theme.white },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "WhatsApp",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
