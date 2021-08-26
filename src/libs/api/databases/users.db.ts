import { IDGenerator } from 'utils/helpers';
import { DB } from '../abstractions/storage';

export interface IUser {
	id: string;
	name: string;
	emailAddress: string;
	password: string;
	isAdmin: boolean;
	// avatarURL: string;
}

export class UsersDB extends DB<IUser> {
	constructor() {
		super('users');
	}

	findAll() {
		return this.getAll();
	}

	findOne(id: string) {
		return this.get(id);
	}

	create(user: Omit<IUser, 'id'>) {
		const id = IDGenerator();
		return this.set(id, { ...user, id });
	}

	singIn(emailAddress: string, password: string) {
		const users = this.findAll();
		const user = users.find((e) => e.emailAddress === emailAddress && e.password === password);
		if (!user) return null;
		return {
			id: user.id,
			isAdmin: user.isAdmin,
		};
	}
}

export const user = new UsersDB();
