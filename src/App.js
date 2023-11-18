/** @format */

import { global } from './styles/global';
import HomeScreen from './screens/HomeScreen';
import FoodHomeScreen from './screens/FoodHomeScreen';
import { Layout } from 'antd';
import SiderComponent from './components/SiderComponent';
import HeaderComponent from './components/HeaderComponent';
import { colors } from './constansts/colors';

const { Content } = Layout;
function App() {
	return (
		<Layout style={{ height: '100vh', backgroundColor: colors.gray }}>
			<SiderComponent />
			<Content>
				<HeaderComponent />
				<FoodHomeScreen />
			</Content>
		</Layout>
	);
}

export default App;
