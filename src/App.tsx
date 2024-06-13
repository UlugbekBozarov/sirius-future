import { ThemeProvider } from "providers";
import Router from "routers/Router";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
