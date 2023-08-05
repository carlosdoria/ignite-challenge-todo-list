import { View, Text, SafeAreaView, Alert } from "react-native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useState } from "react";

type screenProps = {};

export function Home({}: screenProps) {
  const [newTaskState, setNewTaskState] = useState("");
  const [tasksState, setTasksState] = useState<String[]>([]);

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

      {/* <TaskList/> */}
    </SafeAreaView>
  );
}
