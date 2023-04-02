
import {generateAlias} from '$lib/utils';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase, getSession }, params }) => {
	const player_id = params.id;
	console.log('player_id', player_id);

	const session = await getSession();

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the database for the player with the given ID
	const { data: existingData, error: existingError } = await supabase
		.from('players')
		.select('*')
		.eq('player_id', player_id)
		.single();

	if (existingError) {
		throw existingError;
	}

	if (!existingData) {
		// If no player with this ID exists, generate a new alias and insert it into the database
		const alias = generateAlias();

		const { data: newData, error: newError } = await supabase
			.from('players')
			.insert({ player_id, alias })
			.select('*')
			.single();

		if (newError) {
			throw newError;
		}

		return new Response(JSON.stringify(newData));
	}

	// Return the existing player data
	return new Response(JSON.stringify(existingData));
};



export const PUT = async ({ params }) => {
	const body = `The Player ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ params }) => {
	const body = `The Player ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

DELETE.satisfies = 'RequestHandler';

