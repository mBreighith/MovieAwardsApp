import { API_URL } from '../constants/api';

export const getBallotData = async() => {

    try {
        const response = await fetch(`${API_URL}/api/getBallotData`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
