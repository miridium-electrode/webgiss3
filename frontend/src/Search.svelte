<script>
	import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
	const instantsearch = require('instantsearch.js').default;
	import { searchBox, hits } from 'instantsearch.js/es/widgets';

	function search(node) {
		const isearch = instantsearch({
			indexName: 'uni',
			searchClient: instantMeiliSearch('http://localhost:7700', 'masterk')
		});

		isearch.addWidgets([
			searchBox({
				container: node
			})
		])
	}
</script>

<input use:search>