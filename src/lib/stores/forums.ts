// import { writable } from 'svelte/store';
// import { error } from '@sveltejs/kit';
// import { getForums } from '$lib/server/supabase';



// const createForumsStore = () => {
// 	const store = writable({});
// 	const { subscribe, set, update } = store;

// 	const fetchForums = async () => {
// 		try {
// 			const { data, error } = await getForums();
// 			set(data);
// 			return data;
// 		} catch (err) {
// 			return error(500, <Error>err);
// 		}
// 	};

// 	return {
// 		subscribe,
// 		fetchForums
// 	};
// };

// export const forums = createForumsStore();
