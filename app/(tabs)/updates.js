import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Contacts from "expo-contacts";
import ChatItem from "../../components/ChatItem";
import StatusItem from "../../components/StatusItem";
import ChannelItem from "../../components/ChannelItem";

const Updates = () => {
  const [contacts, setContacts] = useState([]);
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
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.title}>Status</Text>
        <FlatList
          data={contacts}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <StatusItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
      <View style={styles.channelContainer}>
        <Text style={styles.title}>Find channels</Text>
        <FlatList
          data={contacts}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ChannelItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Updates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 15,
    backgroundColor: theme.white,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
  },
});
