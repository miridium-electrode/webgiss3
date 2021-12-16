const fs = require("fs");
const { MeiliSearch } = require("meilisearch");
const path = require('path');

(async () => {
	let rawdata = fs.readFileSync(path.join(__dirname, './unigeo.json'));
	let uni = JSON.parse(rawdata);
	
	const client = new MeiliSearch({
		host: 'http://127.0.0.1:7700',
		apiKey: 'masterk'
	});

	const index = client.index('uni');

	let response = await index.addDocuments(uni);

	console.log(response);
})()