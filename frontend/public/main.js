fetch('http://localhost:8080/', {
	method: "GET",
	headers: {
		'Accept': 'application/json'
	}
})
.then(res => {
	if(!res.ok) {
		throw new Error('something\'s wrong');
	} else {
		return res.json();
	}
})
.then(jres => {
	let data = jres.data;
	let map = L.map('map').setView([data[0].latitude, data[0].longitude], 13);
		
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	for(let d of data) {
		L.marker([d.latitude, d.longitude]).addTo(map)
			.bindPopup(d.name)
			.openPopup();
	}
})
.catch(err => {
	console.log(err);
})
