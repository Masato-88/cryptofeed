import { useEffect, useState } from 'react'
import Gallery from '../Gallery'
import './styles.css'

export default function App() {
    //Store API data here
    const [articles, setArticles] = useState([])
    //Query the API component mount
    useEffect(() => {

        //Define an async function to JSONify the query response
        async function getData() {
            const rapidApiKey = `${import.meta.env.VITE_X_RapidAPI_Key}`;
            
            const requestOptions1 = {
                method: 'GET', // HTTP method (GET, POST, etc.)
                headers: {
                    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
                    'X-RapidAPI-Key': rapidApiKey,
                },
            };

            const requestOptions2 = {
                method: 'GET',
                headers: {
                    'X-rapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
                    'X-rapidAPI-Key': rapidApiKey,
                },
            };

            const apiUrl1 = 'https://crypto-news16.p.rapidapi.com/news/top/50';
            const apiUrl2 = 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list'
            
            // Make the API request
            fetch(apiUrl1, requestOptions1)
                .then(response1 => {
                    if (!response1.ok) {
                    throw new Error('Network response was not ok');
                    }
                    return response1.json();
                })
                .then(data1 => {
                    setArticles(data1)
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the request:', error);
                });
            
            // fetch(apiUrl2, requestOptions2)
            //     .then(response2 => {
            //         if (!response2.ok) {
            //             throw new Error('Network response was not ok');
            //         }
            //         return response2.json();
            //     })
            //     .then(data2 => {
            //         setArticles(data2)
            //         console.log(data2)
            //     })
            //     .catch(error => {
            //         console.log('There was a problem with the request:', error);
            //     })

        }
        //Call the async function
        getData()
    },[])
    return (
        <>
            <h1>Crypto Feed APP</h1>
            <Gallery articles={articles} />
        </>
        
    )
}