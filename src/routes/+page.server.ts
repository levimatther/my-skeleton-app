export async function load(event) {
	// fetch from api/

    let a = 1;
    let b = 2;
	const randomNumberResponse = await event.fetch('/api/random-number', {
		method: 'POST',
		body: JSON.stringify({ a, b }),
		headers: {
			'content-type': 'application/json'
		}
	});

	const authResponse = await event.fetch('/api/auth', {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	return {
		example: 'Hello World',
		randomNumber: await randomNumberResponse.json(),
		auth: await authResponse.json()
	};
}
