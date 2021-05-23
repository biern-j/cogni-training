import React, { useState, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider, makeStyles, createStyles, Theme, createMuiTheme } from "@material-ui/core";

import { colors } from "./assets/colors";


type ModeType = "light" | "dark";

type Props = {
  children: ReactNode;
};
const queryClient = new QueryClient();

export const Providers = ({ children, ...restProps }: Props) => {
  const [mode, setMode] = useState<ModeType>("light");

const theme = createMuiTheme(mode === "light" ? colors.light : colors.dark);


  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
