import React from 'react';
import './Home.css'
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className='banner flex items-center justify-center flex-col'>
                <h1 className='text-6xl text-center font-semibold'>Burj Hotel</h1>
                <h3 className='text-3xl text-center font-semibold'>Lorem ipsum dolor sit.</h3>
            </div>

            <div className='flex justify-center gap-6 mt-7 container mx-auto '>
                {
                    data.map(room=> <Card key={room.picture} room={room} ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;