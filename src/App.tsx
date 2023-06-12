import React from 'react';
import Task01Class from "./containers/Task01/Task01Class";
import Task01Fc from "./containers/Task01/Task01FC";

const App = () => {
	return (
		<div>
			{/*<Task01Class /> /!* Class Style *!/*/}
			<Task01Fc />    {/* Function Style */}
		</div>
	);
};

export default App;