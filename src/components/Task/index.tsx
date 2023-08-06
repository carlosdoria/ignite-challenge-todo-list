import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { useState } from "react";

export type TaskProps = {
  text: string;
  handleCompleteTask: (task: string) => void;
  handleDeleteTask: (task: string) => void;
};

export function Task({
  text,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCompleteTask(text)}
    >
      <View
        style={{
          height: 20,
          width: 20,
          backgroundColor: "red",
        }}
      ></View>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => handleDeleteTask(text)}
      >
        <Text>-</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
