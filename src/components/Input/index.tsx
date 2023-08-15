import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { useState } from "react";

type InputProps = {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
};

export function Input({ value, setValue, onSubmit }: InputProps) {
  const [activeBorder, setActiveBorder] = useState(false);

  const handleActiveBorder = (status: boolean) => {
    setActiveBorder(status);
  };

  const borderStyle = {
    borderColor: activeBorder
      ? THEME.COLORS.PURPLE_DARK
      : THEME.COLORS.GRAY_700,
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY_300}
        style={[styles.input, borderStyle]}
        onFocus={() => handleActiveBorder(true)}
        onBlur={() => handleActiveBorder(false)}
        selectionColor={THEME.COLORS.GRAY_100}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}
