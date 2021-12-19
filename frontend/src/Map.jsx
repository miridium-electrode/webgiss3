import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useUniData, getUni } from "./unidata";
import { QueryClientProvider, QueryClient } from "react-query";
import 'leaflet/dist/leaflet.css'
import { useEffect } from "react";

export default function Map() {
	return (
		<MapImage/>
	)
}

function MapImage() {
	const data = useUniData(state => state.unidata);
	const setUniData = useUniData(state => state.setUniData);

	useEffect(() => {
		getUni()
		.then(res => 
				res.map(v => ({...v, checked: true}))	
		)
		.then(res => {setUniData(res)})
		.catch(err => console.log(err))
	}, [])

	return (
		<MapContainer center={[-7.29835157152597, 112.672295092615]} zoom={12} scrollWheelZoom={false} style={{height:'100vh', flexGrow: 1}}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{data && data.map((val) => (val.checked &&
				<Marker position={[val.latitude, val.longitude]} key={val.id}>
						<Popup>
							{val.name}
							<br/>
							{val.address}
						</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}