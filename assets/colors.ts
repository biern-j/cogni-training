import { ThemeOptions } from "@material-ui/core";

type ColorType = { [key: string]: {[key: string]: string} }
export const colors: ColorType = {
  light: {
    promary: "#6200EE",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    secondaryVaiant: "#018786",
    background: "#FFF",
    surface: "#FFF",
    error: "#B00020",
    onPrimary: "#FFF",
    onSecondary: "#000",
    onBackground: "#000",
    onSurgace: "#000",
    onError: "#FFF",
  },
  dark: {
    promary: "#BB86FC",
    primaryVariant: "#3600B3",
    secondary: "#03DAC6",
    secondaryVaiant: "#03DAC6",
    background: "#121212",
    surface: "#121212",
    error: "#FC6679",
    onPrimary: "#000",
    onSecondary: "#000",
    onBackground: "#FFF",
    onSurgace: "#FFF",
    onError: "#000",
  },
};

export const light: ThemeOptions = {
  palette: {
    type: "light"
  }
};

 export const dark: ThemeOptions = {
  palette: {
    type: "dark"
  }
}