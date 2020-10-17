import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default function ListarContactos() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        data.forEach((contacto) => {
          console.log(contacto);
        });
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Contacts Module Example</Text>
    </View>
  );
}
