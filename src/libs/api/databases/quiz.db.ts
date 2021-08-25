/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IDGenerator } from 'utils/helpers';
import { DB } from '../abstractions/storage';

export interface Quiz {
	id: string;
	title: string;
	description?: string;
	answer: string;
}

class QuizDB extends DB<Quiz> {
	constructor() {
		super('quiz');
	}

	findOne(id: string) {
		return this.get(id);
	}

	findAll() {
		return this.getAll();
	}

	create(quiz: Omit<Quiz, 'id'>) {
		const id = IDGenerator();
		return this.set(id, { ...quiz, id });
	}

	update(id: string, value: Partial<Omit<Quiz, 'id'>>) {
		const found = this.findOne(id);
		if (found) {
			this.set(id, Object.assign(found, value));
			return this.findOne(id)!;
		}
		throw new Error('Quiz Not Found');
	}

	delete(id: string) {
		this.remove(id);
	}
}

/**
 * ### Used By Admin
 **/
export const quiz = new QuizDB();
