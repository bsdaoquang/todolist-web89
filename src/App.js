/** @format */

import { global } from './styles/global';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className='containt-fuild' style={global.container}>
			<div className='container mt-4'>
				<HomeScreen />
			</div>
		</div>
	);
}

export default App;
