import {RevertConnect} from "@revertdotdev/revert-react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<RevertConnect
					config={{
						revertToken: "test",
						tenantId: "testTenantId",
					}}
				/>
			</header>
		</div>
	);
}

export default App;
