import { BrowserRouter, Routes} from "react-router-dom";
import { renderRoutes, routes } from './routes'
import { ThemeProvider } from "./components/Theme/ThemeProvider";

export default function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


