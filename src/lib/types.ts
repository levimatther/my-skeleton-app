import type {Gender, RelationshipStatus, Soul, Species} from './enums';

export interface Character {
	id: number;
	age?: number;
	avatar?: string;
	bio?: string;
	createdAt: string;
	firstName?: string;
	gender?: Gender;
	lastName?: string;
	player: Player;
	relationshipStatus?: RelationshipStatus;
	soulType?: Soul;
	species?: Species;
	threads?: Thread[];
	updatedAt?: string;
}

export interface Characters extends Array<Character> {}

export interface Forum {
	id: number;
	createdAt: string;
	description?: string;
	heroImage?: string;
	isParent?: boolean;
	ownerId?: number;
	owner?: Player;
	parent?: Forum;
	title: string;
	updatedAt?: string;
}

export interface Forums extends Array<Forum> {}

export interface Player {
	player_id: string;
	alias: string;
	age?: number;
	avatar?: string;
	bio?: string;
	characters?: Character[];
	created_at: string;
	dislikes: string;
	likes: string;
	threads?: Thread[];
	time_zone?: string;
	updated_at?: string;
}

export interface Players extends Array<Player> {}

export interface Post {
	id: number;
	body: string;
	createdAt: string;
	character: Character;
	likes?: number;
	owner: Player;
	thread: Thread;
	updatedAt?: string;
}

export interface Posts extends Array<Post> {}

export interface Thread {
	id: number;
	createdAt: string;
	description?: string;
	forum: Forum;
  likes?: number; // todo: total of all post likes.
	owner: Player;
	title: string;
	updatedAt?: string;
}

export interface Threads extends Array<Thread> {}

export interface User {
	id: number;
	email: string;
	role: string;
}