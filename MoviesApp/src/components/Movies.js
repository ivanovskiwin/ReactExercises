import React, {useEffect, useState} from "react";
import MovieBlock from "./MovieBlock";
import Filters from './Filters'
function Movies(){
    let url = "https://yts.mx/api/v2/list_movies.json?limit=50";
    let [movies, setMovies] = useState([]);
    let [filteredMovies, setFilteredMovies] = useState([]);
    let [filterQueries, setFilterQueries] = useState({
        searchQuery: "",
        quality: "All",
        genre: "All",
        rating: "All",
        year: "All",
        orderby: "asc" 
    })
    

    function handleSearch(e){
        setFilterQueries({...filterQueries, searchQuery:e.target.value});
    }
    function handleQuality(e){
        setFilterQueries({...filterQueries, quality:e.target.value});
    }
    function handleGenre(e){
        setFilterQueries({...filterQueries, genre:e.target.value});
    }
    function handleRating(e){
        setFilterQueries({...filterQueries, rating:e.target.value});
    }
    function handleYear(e){
        setFilterQueries({...filterQueries, year:e.target.value});
    }
    function handleOrderBy(e){
        setFilterQueries({...filterQueries, orderby:e.target.value});
    }

    useEffect(
    ()=>{
        async function makeApiCall(url){      
            try {
                let req = await fetch(url);
                let res = await req.json();
                setMovies(res.data.movies);
                setFilteredMovies(res.data.movies);
            } catch (error) {
                console.log(error);
                return;
            }
        }
        makeApiCall(url);
    }
        ,
    []
    );

    useEffect(
        ()=>{
            function filterMovies(movies){
                let moviesArr = [...movies];
                let year = filterQueries.year === "All" ? "" : parseInt(filterQueries.year);
                let rating = filterQueries.rating === "All" ? "" : parseInt(filterQueries.rating);
                let quality = filterQueries.quality === "All" ? "" : filterQueries.quality;
                let genre = filterQueries.genre === "All" ? "" : filterQueries.genre;
                let orderBy = filterQueries.orderby;
                if(year){
                    moviesArr = moviesArr.filter(el=>el.year===year);
                }
                if(rating){
                    moviesArr = moviesArr.filter(el=>el.rating>=rating);
                }
                if(quality){
                    moviesArr = moviesArr.filter(el=>{
                        for (const torrent of el.torrents) {
                            if(torrent.quality===quality) return el;
                        }
                    })
                }
                if(genre){
                    moviesArr = moviesArr.filter(el=>{
                        if(el.genres.includes(genre)) return el;
                    })
                }
                if(orderBy==="asc"){
                    moviesArr.sort((a, b) => {
                        if(a.title<b.title){
                            return -1;
                        }
                        if(a.title>b.title){
                            return 1;
                        }
                        return 0;
                    })
                }else{
                    moviesArr.sort((a, b) => {
                        if(a.title>b.title){
                            return -1;
                        }
                        if(a.title<b.title){
                            return 1;
                        }
                        return 0;
                    })
                }

                if(filterQueries.searchQuery){
                    moviesArr = moviesArr.filter(movie=> movie.title.toLowerCase().includes(filterQueries.searchQuery.toLowerCase()))
                }
            
                setFilteredMovies(moviesArr);
            }
            filterMovies(movies);
        }
        ,
        [filterQueries]
    );

    return (
        <div>
            <Filters handleSearch={handleSearch} filterQueries={filterQueries} handleQuality={handleQuality}  handleGenre={handleGenre} handleRating={handleRating} handleYear={handleYear} handleOrderBy={handleOrderBy}/>
        <div className="container">
            {filteredMovies.map(e=><MovieBlock movie={e} key={e.id}/>)}
        </div>
        </div>
    );
}

export default Movies;