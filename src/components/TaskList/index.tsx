import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { EmptyList } from "../EmptyList";

export interface ITask {
  name: string;
  isCompleted: boolean;
}

export type TaskListProps = { tasks: ITask[] };

export function TaskList({ tasks }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      style={styles.list}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
