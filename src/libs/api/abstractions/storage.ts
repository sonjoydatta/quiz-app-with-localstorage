/* eslint-disable @typescript-eslint/no-non-null-assertion */
export class DB<T> {
	private databaseName: string;

	constructor(databaseName: string) {
		this.databaseName = databaseName;
	}

	protected set(key: string, value: T) {
		localStorage.setItem(`${this.databaseName}_${key}`, JSON.stringify(value));
		return this.get(key)!;
	}

	protected get(key: string): T | null {
		const value = localStorage.getItem(`${this.databaseName}_${key}`);
		if (!value) return null;
		return JSON.parse(value);
	}

	protected getAll(): T[] {
		const result = [];
		for (const key in localStorage) {
			if (key.includes(`${this.databaseName}_`)) {
				const value = localStorage.getItem(key)!;
				result.push(JSON.parse(value));
			}
		}
		return result;
	}

	protected remove(key: string) {
		localStorage.removeItem(`${this.databaseName}_${key}`);
	}
}
