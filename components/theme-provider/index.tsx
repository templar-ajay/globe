"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useSearchParams } from "next/navigation";

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // if the theme is specified in url params then use it by default
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme") as string;
  props.defaultTheme = theme;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
