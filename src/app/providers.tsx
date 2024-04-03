// app/providers.tsx
"use client";

// import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {/* <main className="dark text-foreground bg-background"> */}
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        {/* </main> */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
