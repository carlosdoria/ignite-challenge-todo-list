import { View, Text, SafeAreaView } from "react-native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

type screenProps = {};

export function Home({}: screenProps) {
  return (
    <SafeAreaView>
      <Header />
      <Input />
    </SafeAreaView>
  );
}
