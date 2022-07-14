import React, { useState } from 'react';
import styles from './header.module.css';

export default function Header({ filterMovies, searchMovie }){
    
    const [ searchInput, setSearchInput ] = useState('');
    var genreTypes = [
        { id: "1", name: "Drama" },
        { id: "2", name: "Action" },
        { id: "3", name: "Adventure" },
        { id: "6", name: "Fantasy" },
        { id: "7", name: "Thriller" },
        { id: "8", name: "Horror" },
        { id: "9", name: "Mystery" },
        { id: "11", name: "Sci-Fi" },
    ]

    const [ filter, setFilter ] = useState('');

    const handleFilterChange = (genre)=> {
        setFilter(genre);
        filterMovies(genre);

        setSearchInput('')
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        setFilter('');
        searchMovie(searchInput);
    }
    return (
        <div className={styles.container}>
            <form className={styles.searchField} onSubmit={(e)=> handleSubmit(e)}>
                <input 
                    type="text" 
                    className={styles.input} 
                    placeholder='Search' 
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                />
                <button type="search" className={styles.btn}> Search </button>
            </form>
            <div className={styles.filterField}>
                <div className={`${styles.filter} ${filter === "" && styles.active}`} onClick={()=> handleFilterChange('')}> All Movies </div>
                { genreTypes.map(type=> (
                    <div 
                        className={`${styles.filter} ${filter === type.name && styles.active}`} 
                        key={type.id} 
                        onClick={()=> handleFilterChange(type.name)}
                    > { type.name } </div>
                ))}
            </div>
        </div>
    )
}
