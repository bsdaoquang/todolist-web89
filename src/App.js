/** @format */

import { ConfigProvider, Layout } from 'antd';
import TimeTableScreen from './screens/TimeTableScreen';

const { Content } = Layout;
function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: 'coral',
					fontSize: 14,
				},
			}}>
			<Layout style={{}}>
				<Content>
					<TimeTableScreen />
				</Content>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
