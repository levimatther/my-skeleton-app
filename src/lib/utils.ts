export const handleError = (error: any): any => {
	console.error(error);
	return error;
};

// Generate a random user alias in the format [genre]-[animal]-123
export const generateAlias = (): string => {
	const genres: string[] = [
		'Action',
		'Adventure',
		'Crime',
		'Comedy',
		'Drama',
		'Horror',
		'Mystery',
		'Romance',
		'SciFi',
		'Spy',
		'Thriller',
	];
	const animals: string[] = [
		'Ant',
		'Bear',
		'Bison',
		'Cat',
		'Crocodile',
		'Dog',
		'Dolphin',
		'Eagle',
		'Elephant',
		'Flamingo',
		'Fox',
		'Giraffe',
		'Gorilla',
		'Hedgehog',
		'Hippo',
		'Iguana',
		'Impala',
		'Jaguar',
		'Jellyfish',
		'Kangaroo',
		'Koala',
		'Lemur',
		'Lion',
		'Moose',
		'Monkey',
		'Narwhal',
		'Nightingale',
		'Octopus',
		'Ocelot',
		'Penguin',
		'Peacock',
		'Quokka',
		'Raccoon',
		'Rhino',
		'Seagull',
		'Squirrel',
		'Tiger',
		'Toucan',
		'Uakari',
		'Unicorn',
		'Viper',
		'Vulture',
		'Walrus',
		'Wombat',
		'Xenops',
		'Xerus',
		'Yak',
		'Yellowjacket',
		'Zebra',
		'Zonkey'
	];
	const randomGenre: string = genres[Math.floor(Math.random() * genres.length)];
	const randomAnimal: string = animals[Math.floor(Math.random() * animals.length)];
	const randomNumber: number = Math.floor(Math.random() * 900) + 100;
	return `${randomGenre}-${randomAnimal}-${randomNumber}`;
};
