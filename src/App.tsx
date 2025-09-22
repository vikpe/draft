import type { ReactNode } from "react";
import { Board } from "@/components/board";
import config from "./config";

export function App(): ReactNode {
  return (
    <div className="p-6 min-h-screen max-w-screen-2xl mx-auto select-none max-h-screen overflow-hidden">
      <Board config={config} />
    </div>
  );
}
