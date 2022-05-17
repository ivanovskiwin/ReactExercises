import React from "react";

function MovieBlock(props){
    let genresString = props.movie.genres.join(", ");
    return (
        <div className="movieBlock">
            <a href={props.movie.url} target="_blank">
            <img className="movieImage" src={props.movie.medium_cover_image} width="90%"/>
            </a>
            <h4 className="movieTitle">{props.movie.title_long}</h4>
            <small>{genresString}</small>
            <br/>
            <small>Rating: {props.movie.rating}</small>
        </div>
    );
}

export default MovieBlock;