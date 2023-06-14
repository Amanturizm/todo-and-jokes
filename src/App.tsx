import React from 'react';
import Task01Class from "./containers/Task01/Task01Class";
import Task01Fc from "./containers/Task01/Task01FC";
import Task02 from "./containers/Task02/Task02";

const App = () => {
	return (
		<div>
			{/*{==================Task 01=====================}*/}
			{/*<Task01Class /> /!* Class Style *!/*/}
			{/*<Task01Fc />    /!* Function Style *!/*/}
			{/*{==================Task 02=====================}*/}
			<Task02 />
		</div>
	);
};

export default App;