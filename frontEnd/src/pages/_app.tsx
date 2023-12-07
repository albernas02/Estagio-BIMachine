import { GlobalStyle } from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { defaultTheme } from "@/styles/themes/default";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthGuard } from "@/components/AuthGuard";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <AuthGuard>
      <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </AuthGuard>
  );
}
