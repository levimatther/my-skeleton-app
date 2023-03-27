// import { getAuth } from '$lib/server/supabase';
// import type { Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ event, resolve }) => {
// 	const { cookies, locals } = event;

// 	const { user } = await getAuth() 

// 	console.log('user', user);

// 	return resolve(event);
// };

// todo: figure out how to use hooks for global auth check + other things. 