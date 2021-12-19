import { useUniData, getUni } from './unidata';
import './tailwind.css';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from 'react';

const Combine = () => {
	const data = useUniData(state => state.unidata);
	const setData = useUniData(state => state.setUniData);
	const [toggle, setToggle] = useState(true);

	const style = {
		width: '100vw',
		display: 'flex',
		height: '100vh'
	}

	useEffect(() => {
		getUni()
		.then(v => {
			let transform = v.map(v => ({...v, checked: true}))

			setData(transform)
		})
		.catch(err => console.log(err));
	}, [])
	

	const updateCheck = (id) => {
		const newData = data.map((s) => {
			if (s.id === id) {
				return Object.assign(s, {checked: !s.checked});
			}

			return s;
		})

		setData(newData);
	}

	const toggleAll = () => {
		const newData = data.map((s) => 
			Object.assign(s, {checked: !s.checked})
		)

		setToggle(state => !state);
		setData(newData);
	}

	return (
		<div style={style}>
			<MapContainer center={[-7.29835157152597, 112.672295092615]} zoom={12} scrollWheelZoom={true} style={{height:'100vh', flexGrow: 1}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{data.length > 0 && data.filter(val => val.checked).map((val) => (
						<Marker position={[val.latitude, val.longitude]} key={val.id}>
								<Popup>
									{val.name}
									<br/>
									{val.address}
								</Popup>
						</Marker>
					)
				)}
			</MapContainer>
			<div className='h-screen w-1/3 grow-0'>
				<h1 className='text-2xl'>Universitas</h1>
				<div>
					<label>
						<input 
						type="checkbox"
						defaultChecked={toggle}
						onChange={toggleAll}
						/>
						{" Select All"}
					</label>
				</div>
				<ul>
					{data.length > 0 && data.map(val => (
						<li key={val.id}>
							<label>
								<input 
								type="checkbox"
								checked={val.checked || ""}
								onChange={() => updateCheck(val.id)}
								/>
								{" "}
								{val.name}
							</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
};

export default Combine;