import React from "react";
import { Header } from "../components";

function LayoutBase({ children }) {
	return (
		<main>
			<Header />
			<div className="container py-4">{children}</div>
		</main>
	);
}

export default LayoutBase;
