import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: -26,
    paddingHorizontal: 24,

    flexDirection: "row",
  },
  input: {
    height: 52,
    marginRight: 4,
    padding: 16,

    flex: 1,

    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.LG,

    borderRadius: THEME.BORDER_RADIUS,
    backgroundColor: THEME.COLORS.GRAY_500,
  },
  button: {
    height: 52,
    width: 52,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: THEME.COLORS.BLUE_DARK,
    borderRadius: THEME.BORDER_RADIUS,
  },
});
