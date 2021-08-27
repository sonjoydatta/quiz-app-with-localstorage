/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DB } from '../abstractions/storage';

interface Answer {
	answer: string;
	userID: string;
}

export interface IQuizAnswer {
	quizID: string;
	answer: Answer[];
}

class UserAnswers extends DB<IQuizAnswer> {
	constructor() {
		super('user_answers');
	}

	/**
	 * ### Consumed By Admin
	 * */
	getAnswers(quizID: string) {
		return this.get(quizID);
	}

	/**
	 * ### Consumed By User
	 * */
	getAnswersForUser(quizID: string, userID: string): IQuizAnswer | null {
		const answers = this.get(quizID);
		if (answers) {
			const filtered = answers.answer.filter((answer) => answer.userID === userID);
			return {
				...answers,
				answer: filtered,
			};
		}
		return null;
	}

	/**
	 * ### Consumed By User
	 * */
	createAnswer(quizID: string, answer: Answer) {
		const answers = this.getAnswers(quizID);
		if (!answers) {
			const answerDoc: IQuizAnswer = { quizID, answer: [answer] };
			this.set(quizID, answerDoc);

			return this.getAnswersForUser(quizID, answer.userID)!;
		}
		answers.answer.push(answer);
		this.set(quizID, answers);
		return this.getAnswersForUser(quizID, answer.userID)!;
	}
}

export const userAnswers = new UserAnswers();
