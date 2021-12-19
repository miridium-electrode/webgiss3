import Map from './Map';
import Sidebar from './Sidebar';

const App = () => {
	const style = {
		width: '100vw',
		display: 'flex',
		height: '100vh'
	}
	
	return (
		<div style={style}>
			<Map/>
			<Sidebar/>
		</div>
	)
};

export default App
