import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import DetailsPage from '../DetailsPage'
import CurrencyPage from '../CurrencyPage'
import HomePage from '../HomePage'
import AuthFormPage from '../AuthFormPage'
import './styles.css'


export default function App() {
    //Store API data here
    const [articles, setArticles] = useState([])
    const [prices, setPrices] = useState([])
    const [detailsData, setDetailsData] = useState({})
    //Query the API component mount
    useEffect(() => {

        //Define an async function to JSONify the query response
        async function getData() {
            const rapidApiKey = `${import.meta.env.VITE_X_RapidAPI_Key}`;
            console.log(rapidApiKey)
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

            const apiUrl1 = 'https://crypto-news16.p.rapidapi.com/news/top/10';
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
            
            fetch(apiUrl2, requestOptions2)
                .then(response2 => {
                    if (!response2.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response2.json();
                })
                .then(data2 => {
                    setPrices(data2)
                })
                .catch(error => {
                    console.log('There was a problem with the request:', error);
                })

        }
        //Call the async function
        getData()
    },[])

    return (
        <>
            <nav className="text-[white] items-center px-4">
                <div className="">
                    <div className="relative flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <h2 className="font-bold text-2xl">Cyrpto Feed App</h2>
                            </Link>
                        </div>
                        <div className="flex-grow">
                            <ul className="flex justify-end text-gray-300 text-lg font-medium">
                                <li>
                                    <Link to="/coins">
                                        <h4 className="px-3 py-2 hover:text-white">Coin List</h4>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/auth/signup">
                                        <h4 className="px-3 py-2 hover:text-white">Sign Up</h4>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/auth/login">
                                        <h4 className="px-3 py-2 hover:text-white">Log In</h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={
                    <HomePage 
                        articles={articles}
                        setDetailsData={setDetailsData}
                    />} 
                />
                <Route path="/details" element={<DetailsPage {...detailsData} />} />
                <Route path="/coins" element={<CurrencyPage prices={prices} />} />
                <Route path="/auth/:formType" element={<AuthFormPage />} />
                
            </Routes>
        </>
        
    )
}