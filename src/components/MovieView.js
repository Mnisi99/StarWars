import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
            })
    }, [id]);


    const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

    return (
        <>
            <Hero text={movieDetails.title} backdrop={backdropUrl}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                    </div>
                    <div className="col-md-8">
                       <h2>{movieDetails.original_title}</h2>
                       <p className="lead">{movieDetails.overview}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default MovieView;