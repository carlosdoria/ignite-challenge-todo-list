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
import { Task } from "../Task";

export interface ITask {
  name: string;
  isCompleted: boolean;
}

export type TaskListProps = { tasks: ITask[] };

export function TaskList({ tasks }: TaskListProps) {
  const handleCompleteTask = (task: string) => {
    console.log("Complete", task);
  };

  const handleDeleteTask = (task: string) => {
    console.log("Delete", task);
  };

  return (
    <FlatList
      data={tasks}
      style={styles.list}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Task
          text={item.name}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
