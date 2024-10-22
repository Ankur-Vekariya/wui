import { router, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
// import theme from "../utils/theme";
import * as Contacts from "expo-contacts";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => router.push("/chat")}>
      <Image
        style={styles.image}
        source={{ uri: item?.image?.uri }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text
            style={styles.description}
          >{`${new Date().getHours()}:${new Date().getMinutes()}`}</Text>
        </View>
        <Text style={styles.description}>{item?.firstName}</Text>
      </View>
    </TouchableOpacity>
  );
};
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
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    marginVertical: 6,
    gap: 10,
    paddingVertical: 6,
    // borderWidth: 1,
    // borderColor: "red",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#0553",
    borderRadius: 100,
  },
});
