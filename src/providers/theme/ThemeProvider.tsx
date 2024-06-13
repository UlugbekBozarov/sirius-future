import { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: "#8D7FC7",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
        },
      })}
    >
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
