const apiKey = process.env.REACT_APP_KEY;

// Fetch data for individual coin.
async function coinInfo(coinId) {
	try {
		const response = await fetch(`https://openapiv1.coinstats.app/coins/${coinId}`, {
			method: 'GET',
			headers: new Headers({
				accept: 'application/json',
				'Accept-Encoding': 'br',
				'Cache-Control': 'max-age=31536000', // Cache data for one year.
				'X-API-KEY': apiKey,
			}),
		});

        const data = await response.json();
        return data;

	} catch (error) {
		console.error('Error fetching data', error);
	}
}

export default coinInfo;
