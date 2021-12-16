import { useQuery } from "react-query";
import env from '../env'

async function getUni() {
	try {
		let res = await fetch(env.SERVER, {
			method: 'GET'
		});
		let jres = await res.json();
		let d = await jres;

		return d.data;
	} catch (error) {
		console.log(error);
	}
}

function useUniData() {
	const {data, error, isError, isLoading } = useQuery('uni-pg', getUni);

	if(isError) {
		console.log(error)
	}

	return [data, isLoading];
}

export { useUniData };