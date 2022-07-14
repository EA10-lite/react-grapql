import React from "react";
import styles from './filteredMovies.module.css';
import { useParams } from 'react-router-dom';

// components
import List from "../list/list";


// apollo-client
import { useQuery } from "@apollo/client";
// queries
import {getMovieBasedOnFilter } from '../../utils/query';
// utils
import { convertTimestampToDate, groupMoviesByDate } from '../../utils/reuseables'


const FilteredMovies = () => {
    const { id : name } = useParams();
    const { data, loading, error } = useQuery(getMovieBasedOnFilter,{
        variables: { name }
    })
    
    if (loading) return "Loading...";
    if (error) return <p>{error.message}</p>

    let groupDataByDate = groupMoviesByDate(data.genres.movies)


    return (
        <div className={styles.container}>
            { groupDataByDate?.map((item,i)=> (
                <div className={styles.data} key={i}>
                <div className={styles.dateContainer}>
                    <h3 className={styles.date}> { convertTimestampToDate(item.date) } </h3>
                </div>
                { item.data.map(data=> (
                    <div className={styles.item} key={data.id}>
                        <List data={data} />
                    </div>
                ))}
                </div>
            ))}
        </div>
    )
}


export default FilteredMovies;