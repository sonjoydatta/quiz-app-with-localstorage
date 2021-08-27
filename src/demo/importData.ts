import { quiz, user } from 'libs/api';
import { Dispatch, SetStateAction } from 'react';
import { dummyMembers, dummyQuizzes } from './constants';

export const importData = (id: number, setStart: Dispatch<SetStateAction<number>>) => {
	const isData = localStorage.getItem('dummyData');

	if (isData !== 'YES') {
		if (dummyQuizzes[id]) quiz.create(dummyQuizzes[id]);
		if (dummyMembers[id]) user.create(dummyMembers[id]);
		if (!dummyQuizzes[id] && !dummyMembers[id]) localStorage.setItem('dummyData', 'YES');
		setStart(id + 1);
	}
};
