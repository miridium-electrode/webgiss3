import Map from './Map';
import Search from './Search';
import Sidebar from './Sidebar';
import Test from "./Test";

const App = () => {
	const style = {
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		height: '100vh'
	}
	
	return (
		<div style={style}>
			<Test/>
		</div>
	)
};

export default App
