import React from "react";
import { Footer, Header } from "../components";

function LayoutBase({ children }) {
	return (
		<main>
			<Header />
			<div className="container py-4">{children}</div>
			<Footer />
		</main>
	);
}

export default LayoutBase;
