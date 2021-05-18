import React from 'react';
import ToDo from './components/todo/todo';
import NavBar from './components/todo/navigation';

import SettingProvider from './components/context/setting';

const App = () => (
	<>
		<NavBar />
	
		<SettingProvider>
			<ToDo />
		</SettingProvider>

	</>
);

export default App;