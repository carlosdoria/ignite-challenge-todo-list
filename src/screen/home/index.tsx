import { View, Text, SafeAreaView } from "react-native";
import { Header } from "../../components/Header";

type screenProps = {};

export function Home({}: screenProps) {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
}
