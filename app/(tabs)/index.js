import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Contacts from "expo-contacts";
import theme from "../../utils/theme";
import ChatItem from "../../components/ChatItem";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClose, setSearchClose] = useState(false);

  // console.log(contacts[4]?.phoneNumbers[0]?.number);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, [searchClose]);

  console.log(contacts[0]);

  useEffect(() => {
    console.log(search);
    let filteredData = contacts.filter((item) => item.name.includes(search));
    setContacts(filteredData);
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Ask Meta Ai or Search"
          />
          {search !== "" && (
            <TouchableOpacity
              onPress={() => {
                setSearchClose(!searchClose);
                setSearch("");
              }}
            >
              <Entypo name="cross" size={30} color="black" />
            </TouchableOpacity>
          )}
        </View>
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
