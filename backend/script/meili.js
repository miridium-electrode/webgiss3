const fs = require("fs");
const { MeiliSearch } = require("meilisearch");

(async () => {
	let rawdata = fs.readFileSync('./uni.json');
	let uni = JSON.parse(rawdata);
	
	const client = new MeiliSearch({
		host: 'http://127.0.0.1:7700',
		apiKey: 'masterk'
	});

	const index = client.index('uni');

	let response = await index.addDocuments(uni);

	console.log(response);
})()