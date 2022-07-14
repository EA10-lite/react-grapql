import React, { useState } from 'react';
import styles from './header.module.css';

import { NavLink, useNavigate } from 'react-router-dom';


export default function Header(){
    const navigate = useNavigate();
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
    let activeStyle = {
        backgroundColor: "#2C3C90",
        color:"white",
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(searchInput.length > 1){
            navigate(`search/${searchInput}`)
        } else {
            alert("Search input should not be empty!!!");
        }
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
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyle : undefined }
                    className={styles.filter}
                > All Movies </NavLink>
                { genreTypes.map(type=> (
                    <NavLink
                        key={type.id}
                        to={`/genre/${type.name}`}
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                        className={styles.filter}
                    > { type.name } </NavLink>
                ))}
            </div>
        </div>
    )
}
