import React, { memo, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import LoginPage from "./pages/login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./theme";

const App: React.FC<{}> = memo(() => {
  
  const theme = createCustomTheme({
    responsiveFontSizes: true,
  });
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:productId" element={<ProductPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    // </ThemeProvider>
  );
});

export default App;
