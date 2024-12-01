const axios = require('axios');

exports.handler = async (event, context) => {
    const url = 'https://io.adafruit.com/api/v2/webhooks/feed/x1CFWAYd8SqMAFasJmerZ7ANkdCz/raw'; // Example URL, replace with your Adafruit webhook URL
    try {
        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify({ data: response.data })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
