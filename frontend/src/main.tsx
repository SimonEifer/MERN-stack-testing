import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReactNotifications />
		<App />
	</StrictMode>
);
