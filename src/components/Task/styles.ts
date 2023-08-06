import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    padding: 12,
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: THEME.BORDER_RADIUS.ROUNDED_MD,
  },
  text: {
    marginHorizontal: 8,
    flex: 1,

    color: THEME.COLORS.GRAY_100,
  },
  delete: {
    height: 32,
    width: 32,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: THEME.COLORS.DANGER,
  },
});
