import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Navbar } from "../routes/navbar";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
	const navigate = useNavigate();

	return (
		<ClerkProvider
			routerPush={(to) => navigate(to)}
			routerReplace={(to) => navigate(to, { replace: true })}
			publishableKey={PUBLISHABLE_KEY}
		>
			<main>
				<Navbar />
				<Outlet />
			</main>
		</ClerkProvider>
	);
}
