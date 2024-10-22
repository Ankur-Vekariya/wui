import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import * as Contacts from "expo-contacts";
import theme from "../../utils/theme";
import ChatItem from "../../components/ChatItem";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Image, Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          style={{
            backgroundColor: "#F0F0F0",
            borderRadius: 100,
            height: 45,
            padding: 10,
            fontSize: 16,
          }}
          placeholder="Ask meta Ai or Search"
        />
        <FlatList
          data={contacts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ChatItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 15,
    backgroundColor: theme.white,
  },
});
