import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FunctionComponent, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppStackParamList } from "../AppNavigator";

type Navigation = StackNavigationProp<AppStackParamList, "SampleTwo">;

const SampleScreenTwo: FunctionComponent = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <View style={styles.container}>
      <Text>Sample Screen 2</Text>
      <Pressable onPress={() => navigation.navigate("SampleOne")}>
        <Text>go to 1</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default SampleScreenTwo;
