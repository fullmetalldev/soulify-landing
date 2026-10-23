import {createRoot} from "react-dom/client";
// @ts-ignore
import App from "./App.tsx";
import "./styles/landing.css";

createRoot(document.getElementById("root")!).render(<App/>);
