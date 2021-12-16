import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useUniData } from "./unidata";
import { QueryClientProvider, QueryClient } from "react-query";
import 'leaflet/dist/leaflet.css'

const qc = new QueryClient();

export default function Map() {
	return (
		<QueryClientProvider client={qc}>
			<MapImage/>
		</QueryClientProvider>
	)
}

function MapImage() {
	const [data, isLoading] = useUniData();

	if(isLoading) {
		return "Loading...";
	}

	return (
		<MapContainer center={[data[0].latitude, data[0].longitude]} zoom={13} scrollWheelZoom={false} style={{height:'50vh', flexGrow: 1}}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{data.map((val) => (
				<Marker position={[val.latitude, val.longitude]} key={val.id}>
						<Popup>
							{val.name}
						</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}