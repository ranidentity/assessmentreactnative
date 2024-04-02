import globalParameters from '../global';
import axios from 'axios';

async function retrieveMatchAll(){
    const requestBody = {
        state: "active",
        duration: 3,
        order: 'asc',
        groupby: 'time',
        important: 1,
    }
    const url = globalParameters.baseurl + '/api/v1/match/all'
    try {
        const response = await axios.post(url, requestBody, {
            headers: {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                'SiteId': 1,
                'ProductId': 1,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    }
}

export default retrieveMatchAll;