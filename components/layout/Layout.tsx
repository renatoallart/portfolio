import React from "react";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-8">
        {children}
      </main>
    </div>
  );
}
