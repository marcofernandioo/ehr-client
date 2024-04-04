/* eslint-disable prettier/prettier */

const endpoint = "http://localhost:8000"

export async function register(userData) {
    try {
        const response = await fetch(`${endpoint}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error User Registration:', error.message);
        throw error;
    }
}

export async function login(credentials) {
    try {
        const response = await fetch(`${endpoint}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error User Login:', error.message);
        throw error;
    }
}

export default class API {
    constructor() {
        this.endpoint = "http://localhost:8000"
    }

    async register(userData) {
        try {
            const response = await fetch(`${this.endpoint}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error User Registration:', error.message);
            throw error;
        }
    }

    async login(credentials) {
        try {
            const response = await fetch(`${this.endpoint}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error User Login:', error.message);
            throw error;
        }
    }

}