import { createRoot } from "react-dom/client";
import App from "@/App";

export const renderClient = (rootElement: HTMLElement) => {
  createRoot(rootElement).render(<App />);
};
