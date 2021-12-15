<script>
	import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
	import instantsearch from "instantsearch.js";

	function search(node) {
		const isearch = instantsearch({
			indexName: 'uni',
			searchClient: instantMeiliSearch('http://localhost:7700', 'masterk')
		});

		isearch.addWidgets([
			instantsearch.widgets.searchBox({
				container: node
			})
		]);
	}
</script>

<div use:search></div>