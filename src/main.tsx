import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./GlobalStyles.ts";
import { ThemeContextProvider } from "./provider/ThemeContextProvider.tsx";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ThemeProvider>
        <GlobalStyles/>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </StrictMode>
);
