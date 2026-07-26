import "@fontsource-variable/dm-sans";
import "@fontsource-variable/space-grotesk";
import "./index.css";
import { setupStaticEnhancements } from "@/lib/enhance";

document.documentElement.classList.replace("no-js", "js");

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Application root element was not found.");
}

if (rootElement.hasChildNodes()) {
  setupStaticEnhancements();
} else {
  void import("./render-client").then(({ renderClient }) => {
    renderClient(rootElement);
  });
}
