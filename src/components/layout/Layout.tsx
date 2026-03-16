import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CyberCursor } from "@/components/ui/CyberCursor";
import { CommandPalette } from "../CommandPalette";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/30">
      <CyberCursor />
      <CommandPalette />
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
