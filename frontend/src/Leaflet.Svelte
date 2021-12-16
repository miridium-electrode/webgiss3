<script>
	import * as L from 'leaflet';
	import 'leaflet-css'
	let map;

	function createMap(container) {
		let m = L.map(container).setView([51.505, -0.09], 13);
	
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(m);
	
		L.marker([51.5, -0.09]).addTo(m)
			.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
			.openPopup();
		
		return m;
	}

	function leaflet(container) {
		map = createMap(container);

		return {
			destroy: () => {
				map.remove();
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
