import { StatusBar } from "react-native";
import React from "react";

import { Text, View } from "react-native";
import { Routes } from "@routes/index";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor="#0e0e0e" />
        <Routes />
      </View>
    </ThemeProvider>
  );
}
