import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import ProductComponent from "./components/ProductComponent";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./theme";

const App: React.FC<{}> = memo(() => {
  const theme = createCustomTheme({
    responsiveFontSizes: true,
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:productId" element={<ProductPage />}></Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
