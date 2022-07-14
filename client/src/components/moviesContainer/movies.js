import React from "react";
import styles from './movies.module.css';

// components
import List from "../list/list";


// apollo-client
import { useQuery } from "@apollo/client";

// queries
import { getMoviesQuery } from '../../utils/query';

// utils
import { convertTimestampToDate, groupMoviesByDate } from '../../utils/reuseables'


const MoviesContainer = () => {
    const { data, loading, error } = useQuery(getMoviesQuery)

    
    if (loading) return "Loading...";
    if (error) return <p>{error.message}</p>

    let groupDataByDate = groupMoviesByDate(data.movies);


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


export default MoviesContainer;