type IUserToken = {
	id: string;
	isAdmin: boolean;
};

class TokenService {
	getToken(): IUserToken | null {
		const token = localStorage.getItem('token');
		if (!token) return null;
		return JSON.parse(token);
	}

	setToken(value: IUserToken) {
		localStorage.setItem('token', JSON.stringify(value));
	}

	removeToken() {
		localStorage.removeItem('token');
	}
}

export const tokenService = new TokenService();
