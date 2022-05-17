import React, {} from "react";
function Filters({handleSearch, filterQueries, handleQuality, handleGenre, handleRating, handleYear, handleOrderBy}){

    return (
    <div>
        <div className="searchMovie">
        <label htmlFor="search" style={{fontSize: "28px", fontWeight: "600"}}>Search Term: </label>
            <input type="text" name="search" value={filterQueries.searchQuery} onChange={handleSearch}/>
            <input type="button" value="Search"/>
            <br/><br/>
            <label htmlFor="quality">Quality: </label>
            <select name="quality" value={filterQueries.quality} onChange={handleQuality}>
                <option value="All">All</option>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
                <option value="2160p">2160p</option>
                <option value="3D">3D</option>
            </select>
            <label htmlFor="genre">Genre: </label>
            <select name="genre" value={filterQueries.value} onChange={handleGenre}>
                <option value="All">All</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Comedy">Comedy</option>
            </select>
            <label htmlFor="rating">Rating: </label>
            <select name="rating" value={filterQueries.rating} onChange={handleRating}>
                <option value="All">All</option>
                <option value="9">9+</option>
                <option value="8">8+</option>
                <option value="7">7+</option>
                <option value="6">6+</option>
                <option value="5">5+</option>
                <option value="4">4+</option>
                <option value="3">3+</option>
                <option value="2">2+</option>
                <option value="1">1+</option>
            </select>
            <label htmlFor="year">Year: </label>
            <select name="year" value={filterQueries.year} onChange={handleYear}>
                <option value="All">All</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
            <label htmlFor="orderby">Order by: </label>
            <select name="orderby" value={filterQueries.orderby} onChange={handleOrderBy}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <br/>
        </div>
    </div>
    );
}

export default Filters;
