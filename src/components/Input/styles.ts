import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
  input: {
    padding: 16,
    backgroundColor: THEME.COLORS.GRAY_500,
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.LG,
    borderRadius: 6,
  },
});
