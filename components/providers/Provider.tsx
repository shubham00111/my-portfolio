"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <NextThemeProvider
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      attribute={"class"}
    >
      {children}
    </NextThemeProvider>
  );
}
