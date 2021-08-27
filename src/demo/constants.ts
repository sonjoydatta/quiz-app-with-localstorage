import { IQuiz, IUser } from 'libs/api';

export const dummyQuizzes: Omit<IQuiz, 'id'>[] = [
	{
		title: 'What is the capital of New Zealand?',
		answer: 'Wellington',
	},
	{
		title: 'How many permanent teeth does a dog have?',
		answer: '42',
	},
	{
		title: 'What is the name of the largest ocean on earth?',
		answer: 'Pacific Ocean',
	},
	{
		title: 'What is the name of the biggest technology company in South Korea?',
		answer: 'Samsung',
	},
	{
		title: 'What is the currency of Denmark?',
		answer: 'Krone',
	},
	{
		title: 'What is the smallest planet in our solar system?',
		answer: 'Mercury',
	},
	{
		title: 'What is the most sold flavour of Walker’s crisps?',
		answer: 'Cheese and Onion',
	},
	{
		title: 'How long is an Olympic swimming pool (in meters)?',
		answer: '50 meters',
	},
];

export const dummyMembers: Omit<IUser, 'id'>[] = [
	{
		name: 'John Doe',
		emailAddress: 'john@gmail.com',
		password: '12345678',
		isAdmin: true,
	},
	{
		name: 'Tara Black',
		emailAddress: 'tara@gmail.com',
		password: '12345678',
		isAdmin: false,
	},
	{
		name: 'Mary Hart',
		emailAddress: 'mary@gmail.com',
		password: '12345678',
		isAdmin: false,
	},
];
