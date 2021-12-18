import { useSideState } from './unidata';
import { QueryClientProvider, QueryClient } from "react-query";
import './tailwind.css';

const qc = new QueryClient()

export default function Sidebar() {
	return (
		<QueryClientProvider client={qc}>
			<SideContent/>
		</QueryClientProvider>
	);
}


function SideContent() {
	const data = useSideState(state => state.uniListSide);

	console.log(data);

	return (
		<div className='h-screen w-2/5 grow-0'>
			<h1 className='text-lg'>Universitas</h1>
			<ul>
				{data.map((val, i) => (
					<li key={i}>{val.name}</li>
				))}
			</ul>
		</div>
	)
}