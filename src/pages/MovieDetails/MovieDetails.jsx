import React from 'react';
import { useLoaderData } from 'react-router';

const MovieDetails = () => {
    const{title}=useLoaderData();
    console.log(title);
    
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default MovieDetails;