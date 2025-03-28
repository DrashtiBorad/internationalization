"use client";

import queryClient from "@/config/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export function QueryClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
