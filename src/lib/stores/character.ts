// import { writable } from 'svelte/store';
// import { error } from '@sveltejs/kit';
// import { getCharacter, createCharacter, updateCharacter } from '$lib/server/supabase';

// // Verbs: Fetch, Add, Edit, Remove

// export const store = writable({});
// const { subscribe, set, update } = store;

// export const fetchCharacter = async (id) => {
//     try {
//         const { data, error } = await getCharacter(id);
//         set(data);
// 		return data;
//     }
//     catch (err) { 
//         return error(500, <Error> err);
//     }
// }

// export const addCharacter = async (character) => {
//     try {
//         const { data, error } = await createCharacter(character);
//         set(data);
//         return data;
//     }
//     catch (err) {
//         return error(500, <Error> err);
//     }
// }