'use client'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

export function RootProvider({
   children, 
  }: { 
    children: React.ReactNode;
   }) {
  return (
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
  );
}