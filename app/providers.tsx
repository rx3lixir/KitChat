"use client";

import * as React from "react";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem={false}
      storageKey='kitchat-theme'
    >
      <SocketProvider>
        <ModalProvider />
        <NextUIProvider>
          <QueryProvider>{children}</QueryProvider>
        </NextUIProvider>
      </SocketProvider>
    </ThemeProvider>
  );
}
