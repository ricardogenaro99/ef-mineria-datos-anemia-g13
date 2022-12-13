import { Route, Routes } from "react-router-dom";
import { LayoutBase } from "./app/layout";
import { Home, Test , NotFound} from "./app/page";

function App() {
	return (
		<LayoutBase>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="test" element={<Test />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</LayoutBase>
	);
}

export default App;
