<script>
	import * as L from 'leaflet';
	import 'leaflet-css'
	let m;

	function createMap(container) {
		let map = L.map(container).setView([51.505, -0.09], 13);
	
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	
		L.marker([51.5, -0.09]).addTo(map)
			.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
			.openPopup();
		
			return map;
	}

	function leaflet(container) {
		m = createMap(container);

		return {
			destroy: () => {
				m.remove();
			},
		};
	}
</script>

<style>
	#map {
		width: 100vw;
		height: 100vh;
	}
</style>

<div id="map" use:leaflet></div>
