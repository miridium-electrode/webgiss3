import Map from './Map';
import Search from './Search';
import Sidebar from './Sidebar';

const App = () => {
	const style = {
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		height: '100vh'
	}
	
	return (
		<div style={style}>
			<Search/>
			<Map/>
		</div>
	)
};

export default App
