"use client";
import { store } from "@/redux/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";

export default function ThemeProvider({children,...props}:ThemeProviderProps) {

  return<Provider store={store}>
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  </Provider>;
}
