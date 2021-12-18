import { useQuery } from "react-query";
import create from 'zustand';
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

	const dataWithCheck = data && data.map(val => ({...val, checked: true}));

	return {data: dataWithCheck, isLoading};
}

const useSideState = create((set, get) => ({
	uniListSide: [],
	initUniListSide: () => {
		const {data, isLoading} = useUniData();
		if(isLoading) {
			console.log("wait");
		}

		set({uniListSide: data})
	},
	changeChecked: (id) => {
		let foo = get().uniListSide;
		let res = foo.map(f => f.id === id ? {...f, checked: false} : f);

		set({uniListSide: res})
	}
}))

export { useSideState, useUniData };