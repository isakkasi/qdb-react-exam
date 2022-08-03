import { useEffect } from 'react';
import { useState } from 'react';

export const Rates = () => {
    const [usdRate, setUsdRate] = useState({});

    useEffect(() => {
        fetch(
            'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=BGN&amount=1',
            {
                // redirect: 'follow',
                headers: {
                    'X-RapidAPI-Key': 'eacc59c11cmsh0e24ade26fcd1efp10f104jsn4ec279761d74',
		            'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
                },
            },
            []
        )
        .then(response => response.json())
        .then(response => setUsdRate(response))
        .catch(err => console.error(err));

        // console.log(usdRate.result);
    }, []);

    return <span>{usdRate.rates ? usdRate?.rates.BGN.rate : ''}</span>;
};

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'eacc59c11cmsh0e24ade26fcd1efp10f104jsn4ec279761d74',
// 		'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
// 	}
// };

// fetch('https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));