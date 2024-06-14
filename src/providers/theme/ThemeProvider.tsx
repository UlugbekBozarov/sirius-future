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
        shape: {},
        typography: {
          fontFamily: "Circe Rounded, Arial, sans-serif",
          h3: {
            fontSize: "40px",
            lineHeight: "35px",
          },
          h4: {
            fontSize: "2rem",
            lineHeight: "2rem",
            color: "#323854",
          },
          h5: {
            fontSize: "1.5rem",
            lineHeight: "1.5rem",
            color: "#323854",
          },
          h6: {
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            color: "#323854",
          },
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                fontSize: "12px",
                lineHeight: "16px",
                "& .MuiInputBase-root": {
                  height: "36px",
                  boxSizing: "border-box",
                },
                "& .MuiInputBase-input": {
                  height: "36px",
                  padding: "0 14px",
                  boxSizing: "border-box",
                },
                "& .MuiInputLabel-root": {
                  top: "-9px",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(14px, -0px) scale(0.75)", // Shrunken label uchun transformni sozlash
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              sizeLarge: {
                height: "48px",
                fontSize: "18px",
                lineHeight: "22px",
              },
              sizeMedium: {
                height: "40px",
              },
              sizeSmall: {
                height: "32px",
                fontSize: "12px",
                lineHeight: "16px",
              },
              text: {
                backgroundColor: "#DECFFF",
                color: "#323854",
                "&:hover": {
                  backgroundColor: "#8D7FC7",
                },
              },
              outlined: {
                borderColor: "#8D7FC7",
                "&:hover": {
                  borderColor: "#EEEEFF",
                },
              },
              root: {
                textTransform: "none",
                borderRadius: 30,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: "none",
                borderRadius: "30px",
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
