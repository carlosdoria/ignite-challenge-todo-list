import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginRight: 8,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
  },
  counter: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    borderRadius: 999,

    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GRAY_200,

    backgroundColor: THEME.COLORS.GRAY_400,
  },
});
