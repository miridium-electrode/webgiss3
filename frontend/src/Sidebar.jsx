import { useUniData } from './unidata';
import './tailwind.css';
import { isEqual } from 'lodash';

export default function Sidebar() {
	return (
		<SideContent/>
	);
}


function SideContent() {
	const data = useUniData(state => state.unidata, (oldData, newData) => isEqual(oldData, newData));
	const updateCheck = useUniData(state => state.updateCheck);

	return (
		<div className='h-screen w-1/3 grow-0'>
			<h1 className='text-2xl'>Universitas</h1>
			<ul>
				{data.map(val => (
					<div key={val.id}>
						<input 
						type="checkbox"
						defaultChecked={val.checked}
						onChange={() => updateCheck(val.id)}
						/>
						{" "}
						{val.name}
						<br/>
					</div>
				))}
			</ul>
		</div>
	)
}