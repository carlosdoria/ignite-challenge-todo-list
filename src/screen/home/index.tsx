import { View, Text, StatusBar } from "react-native";

type screenProps = {};

export function Home({}: screenProps) {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Home</Text>
    </View>
  );
}
