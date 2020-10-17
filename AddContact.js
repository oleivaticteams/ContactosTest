import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Contacts from "expo-contacts";

export default function AddContact() {
  return (
    <View>
      <Button
        title="Agregar Contacto"
        onPress={async () => {
          const contact = {
            [Contacts.Fields.FirstName]: "Test",
            [Contacts.Fields.LastName]: "McTest",
            [Contacts.Fields.PhoneNumbers]: [
              {
                number: "(123) 456-7890",
                isPrimary: true,
                digits: "1234567890",
                countryCode: "PA",
                id: "1",
                label: "main",
              },
            ],
            [Contacts.Fields.Emails]: [
              {
                email: "test@gmail.com",
                isPrimary: true,
                id: "2",
                label: "main",
              },
            ],
          };

          await Contacts.addContactAsync(contact)
            .then((contactId) => {
              alert("Se creó exitosamente");
            })
            .catch((err) => {
              alert(err);
              console.log(err);
            });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
