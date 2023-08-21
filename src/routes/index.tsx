import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
        }}
      >
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}
