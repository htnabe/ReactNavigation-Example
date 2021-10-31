import { StyleSheet, View, Button } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function firstScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <Button
        title="Go to third screen"
        onPress={() => {
          navigation.navigate('third');
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  }
})
