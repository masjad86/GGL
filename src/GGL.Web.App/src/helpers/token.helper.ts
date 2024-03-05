import { TOKEN_SESSION_KEY_NAME } from "../shared";

export class TokenHelper {
    constructor() { }

    public static getToken() {
        const token = sessionStorage.getItem(TOKEN_SESSION_KEY_NAME);
        return token;
    }

    public static isValidToken() {
        const token = this.getToken();
        if (!token) {
            return false;
        }

        return true;
    }
}