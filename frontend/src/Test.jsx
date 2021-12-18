import { useSideState } from './unidata';

function Test() {
	let uni = useSideState(state => state.uniListSide);

	

	return (
		<div>
			Check console
		</div>
	)
}

export default Test;