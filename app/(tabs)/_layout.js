import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import HeaderRight from "../../components/HeaderRight";
import theme from "../../utils/theme";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.lightGreen,
        headerStyle: {
          backgroundColor: theme.white,
        },
        headerTitleStyle: {
          color: theme.lightGreen,
          fontSize: 24,
          fontWeight: "bold",
        },
        headerRight: () => <HeaderRight />,
        // contentStyle: { backgroundColor: theme.white },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "WhatsApp",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="mark-unread-chat-alt"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="update" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color }) => (
            <Feather name="phone-call" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
