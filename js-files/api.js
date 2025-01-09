
const axios = require('axios');

// Replace with the API endpoint you're interested in
const apiUrl = 'https://api.noroff.dev/api/v2/auction-house/listings';

async function fetchListings() {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchListings();
