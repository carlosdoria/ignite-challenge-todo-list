import { View } from "react-native";
import { Home } from "./src/screen/home";
import { THEME } from "./src/styles/theme";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.GRAY_600 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  );
}
