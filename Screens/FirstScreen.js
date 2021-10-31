import { StyleSheet, View, Button } from "react-native";
import React from "react";

export default function firstScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Button
        title="Go to second screen"
        onPress={() => {
          navigation.navigate('second' );
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
