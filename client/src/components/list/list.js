import styles from './list.module.css';

export default function List({ data }){
    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img src={data.poster_path} alt={ data.title } className={styles.posterImg} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}> { data.title } </h3>
                <div className={styles.genres}>
                    { data?.genreTypes?.map((genre,i)=> (
                        <div className={styles.genre} key={i}> 
                            { genre?.name } 
                            <span>{i !== data.genreTypes.length - 1 && "/"}</span>
                        </div>
                    ))}
                </div>
                <p className={styles.description}> { data.description.length > 40 ? `${data.description.slice(0,200)}...` : data.description } </p>
                
            </div>
        </div>
    )
}