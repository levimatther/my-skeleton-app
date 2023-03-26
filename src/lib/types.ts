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

export interface Forum {
	id: number;
	title: string;
	description?: string;
	createdAt: string;
	updatedAt?: string;
	isParent?: boolean;
	parent?: Forum;
}

export interface Player {
	id: number;
	alias: string;
	age?: number;
	avatar?: string;
	bio?: string;
	characters?: Character[];
	createdAt: string;
	dislikes: string;
	likes: string;
	threads?: Thread[];
	timeZone?: string;
	updatedAt?: string;
}

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

export interface User {
	id: number;
	email: string;
	role: string;
}