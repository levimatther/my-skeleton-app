import { error } from '@sveltejs/kit';
import type { Character } from '$lib/types';

export const GET = async ({ params }) => {
	const characterIds = params.ids.split(',').map((id) => parseInt(id, 10));

	// Use the characterIds array to query the database and retrieve the characters data
	// ...

	const charactersData = /* some code that retrieves the character data based on the IDs */ {};

	return {
		body: charactersData
	};
};

GET.satisfies = 'RequestHandler';

// Example GET request:
// http://localhost:3000/api/v1/characters/1,2,3


export const DELETE = async ({ params }) => {
	const characterIds = params.ids.split(',').map((id) => parseInt(id, 10));

	// Use the characterIds array to query the database and delete the characters
	// ...

	return {
		body: {}
	};
}

DELETE.satisfies = 'RequestHandler';