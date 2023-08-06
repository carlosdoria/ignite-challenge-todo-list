import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",

    borderTopWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,
  },
  image: {
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",

    color: THEME.COLORS.GRAY_300,
  },
  subtile: {
    color: THEME.COLORS.GRAY_300,
  },
});
