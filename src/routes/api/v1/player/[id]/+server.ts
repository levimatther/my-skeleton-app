
import {generateAlias} from '$lib/utils';
import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({
  locals: { supabase, getSession },
  params
}) => {
  const player_id = params.id;
  console.log('player_id', player_id)
  const session = await getSession();

  if (!session) {
    // the user is not signed in
    throw error(401, { message: 'Unauthorized' });
  }
  
  const { data, error } = await supabase
		.from('players')
		.select('*')
		.eq('player_id', player_id)
		.single();

  console.log("player data", data)

  return new Response(JSON.stringify({ ...data }));
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

