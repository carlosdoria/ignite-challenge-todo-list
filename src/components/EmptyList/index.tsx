import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Clipboard from "../../assets/Clipboard.png";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={styles.image} />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtile}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
