import { useUniData } from './unidata';
import { QueryClientProvider, QueryClient } from "react-query";
import shallow from 'zustand/shallow';
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
	const data = useUniData(state => state.unidata, shallow);
	const updateCheck = useUniData(state => state.updateCheck);

	return (
		<div className='h-screen w-1/3 grow-0'>
			<h1 className='text-2xl'>Universitas</h1>
			<ul>
				{data.map(val => (
					// <li key={i}>{val.name}</li>
					<div key={val.id} >
						<input 
						type={"checkbox"}
						key={val.id}
						value={val.id}
						defaultChecked={val.checked} 
						onChange={() => updateCheck(val.id)}
						/>
						{" "}
						<label>{val.name}</label>
						<br/>
					</div>
				))}
			</ul>
		</div>
	)
}