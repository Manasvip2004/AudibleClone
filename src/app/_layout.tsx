import "../../global.css";
import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#010D1A",
    card: "#010D1A",
    primary: "white",
  },
};

export default function Rootlayout() {
  return (
    <ThemeProvider value={theme}>
      <Slot />;
    </ThemeProvider>
  );
}
