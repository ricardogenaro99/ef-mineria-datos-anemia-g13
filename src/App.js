import { Route, Routes } from "react-router-dom";
import { LayoutBase } from "./app/layout";
import { Home } from "./app/page";

function App() {
	return (
		<LayoutBase>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Route>
			</Routes>
		</LayoutBase>
	);
}

export default App;
