import React from "react";
import { Toaster } from "react-hot-toast";
import { Footer, Header } from "../components";

function LayoutBase({ children }) {
	return (
		<main>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					className: "",
					duration: 2000,
					error: {
						duration: 4000,
					},
				}}
			/>
			<Header />
			<div className="container py-4">{children}</div>
			<Footer />
		</main>
	);
}

export default LayoutBase;
