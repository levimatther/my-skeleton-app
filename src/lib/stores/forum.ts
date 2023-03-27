import { writable } from 'svelte/store';
import { error } from '@sveltejs/kit';
import { getForum, createForum, updateForum, deleteForum } from '$lib/server/supabase';

// Verbs: Fetch, Add, Edit, Remove

const createForumStore = () => {
    const store = writable({});
    const { subscribe, set, update } = store;

    const fetchForum = async (id) => {
        try {
            const { data, error } = await getForum(id);
            set(data);
            return data;
        }
        catch (err) {
            return error(500, <Error> err);
        }
    }

    return {
        subscribe,
        fetchForum
    }
}

export const forum = createForumStore();