"use client";

import * as React from "react";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem={false}
      storageKey='kitchat-theme'
    >
      <ModalProvider />
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
