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

const useUniData = create((set, get) => ({
	unidata: [],
	setUniData(d) {
		set({unidata: d});
	},
	updateCheck(id) {
		// let unidataTempMulti = get().unidata;
		// let idx = unidataTempMulti.findIndex(el => el.id === id);
		// let unidataTemp = {...unidataTempMulti[idx]};
		// unidataTemp.checked = !unidataTemp.checked; 
		// unidataTempMulti[idx] = unidataTemp;
		// console.log(unidataTempMulti);

		// set({unidata: unidataTempMulti});

		set(state => ({
			unidata: (() => {
				let unidataTempMulti = state.unidata;
				let idx = unidataTempMulti.findIndex(el => el.id === id);
				let unidataTemp = {...unidataTempMulti[idx]};
				unidataTemp.checked = !unidataTemp.checked; 
				unidataTempMulti[idx] = unidataTemp;
				console.log(unidataTempMulti);

				return unidataTempMulti;
			})()
		}))
	}
}))

export { getUni, useUniData };