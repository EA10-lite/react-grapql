import React from "react";
import styles from './movies.module.css';

// components
import List from "../list/list";

// utils
import { convertTimestampToDate, groupMoviesByDate } from '../../utils/reuseables';


const MoviesContainer = ({ data }) => {
    const groupData = groupMoviesByDate(data);
    
    return (
        <div className={styles.container}>
            { groupData?.map((item,i)=> (
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