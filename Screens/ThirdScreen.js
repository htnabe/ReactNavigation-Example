import { StyleSheet, View, Button } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function firstScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  }
})
