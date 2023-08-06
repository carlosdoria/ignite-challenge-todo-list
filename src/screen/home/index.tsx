import { View, Text, SafeAreaView, Alert } from "react-native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useState } from "react";
import { Counter } from "../../components/Counter";
import { styles } from "./styles";

type screenProps = {};

export function Home({}: screenProps) {
  const [newTaskState, setNewTaskState] = useState("");
  const [tasksState, setTasksState] = useState<String[]>([]);

  // TODO: add reduce to count completed tasks

  const handleAddNewTask = () => {
    if (newTaskState.length < 3) {
      Alert.alert("Digite um nome válido.", "O texto é muito pequeno.");
      return;
    }

    try {
      setTasksState([...tasksState, newTaskState]);
      setNewTaskState("");

      Alert.alert("Tarefa.", "Tarefa adicionada com sucesso.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Header />
      <Input
        value={newTaskState}
        setValue={setNewTaskState}
        onSubmit={handleAddNewTask}
      />

      <View style={styles.counterContainer}>
        <Counter text="Criados" counter={tasksState.length} />
        <Counter text="Concluidos" counter={2} color="purple" />
      </View>
      {/* <TaskList/> */}
    </SafeAreaView>
  );
}
