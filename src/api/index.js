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

export async function submitMedicalRecord(data) {
    try {
        const response = await fetch(`${endpoint}/create/transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error Submitting Medical Record:', error.message);
        throw error;
    }
}

export async function getMedicalRecords() {
    try {
        const response = await fetch(`${endpoint}/get/medical-record`);
        if (!response.ok) {
            alert("Please Try Again.")
            console.log(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (e) {
        alert("Please Try Again.")
        console.error('Error User Login:', e.message);
        throw e;
    }
}

export async function getBlockchain() {
    try {
        const response = await fetch(`${endpoint}/get/blockchain`);
        if (!response.ok) {
            alert("Please Try Again.")
            console.log(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (e) {
        alert("Please Try Again.")
        console.error('Error User Login:', e.message);
        throw e;
    }
}

export async function mineTransactions () {
    try {
        const res = await fetch(`${endpoint}/mine`);
        if (!res.ok) {
            alert("Please Try Again.")
            console.log(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    } catch (e) {
        alert("Please Try Again.")
        console.error('Error User Login:', e.message);
        throw e;
    }
}


