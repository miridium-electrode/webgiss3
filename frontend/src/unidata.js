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

const useUniData = create((set) => ({
	unidata: [],
	setUniData(d) {
		set({unidata: d});
	}
}))

export { getUni, useUniData };