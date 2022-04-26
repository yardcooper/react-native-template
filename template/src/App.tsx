import React from "react";
import { StatusBar } from "react-native";

import AppNavigator from "./AppNavigator";

const App = () => {
  return (
    <>
      <StatusBar />
      <AppNavigator />
    </>
  );
};

export default App;
