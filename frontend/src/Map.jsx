import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useUniData, getUni } from "./unidata";
import 'leaflet/dist/leaflet.css'
import { useEffect } from "react";
import { isEqual } from "lodash";

export default function Map() {
	return (
		<MapImage/>
	)
}

function MapImage() {
	const data = useUniData(state => state.unidata, (oldData, newData) => isEqual(oldData, newData));

	return (
		<MapContainer center={[-7.29835157152597, 112.672295092615]} zoom={12} scrollWheelZoom={false} style={{height:'100vh', flexGrow: 1}}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{data.length > 0 && data.filter(val => val.checked === true).map((val) => (
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
	);
}