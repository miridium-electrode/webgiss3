import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch('http://localhost:7700', 'masterk');

const Search = () => {
	const style = {
		flexGrow: 0,
		width: '100vw',
		padding: '1em'
	};

	return (
		<div style={style}>
			<InstantSearch
			indexName='uni'
			searchClient={searchClient}
			>
				<SearchBox />
			</InstantSearch>
		</div>
	)
};

export default Search;