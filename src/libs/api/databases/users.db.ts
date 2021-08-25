import { IDGenerator } from 'utils/helpers';
import { DB } from '../abstractions/storage';

interface User {
	id: string;
	name: string;
	password: string;
	isAdmin: boolean;
	avatarURL: string;
}

export class UsersDB extends DB<User> {
	constructor() {
		super('users');
	}

	findOne(id: string) {
		return this.get(id);
	}

	create(user: Omit<User, 'id'>) {
		const id = IDGenerator();
		return this.set(id, { ...user, id });
	}
}

export const user = new UsersDB();
