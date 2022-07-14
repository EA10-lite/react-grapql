// using the reducer function to group data by date;

export const groupMoviesByDate = (data)=> {
    let groupDataByDate = [];
    let sortDataByDate = {}

    data.reduce((initial, current)=>{
        if(!sortDataByDate[current.release_date]) {
            sortDataByDate[current.release_date] =  [current];
        }
        else {
            sortDataByDate[current.release_date].push(current)
        }
        return initial
    },[]);

    for (let name in sortDataByDate){
        groupDataByDate.push({date:name, data: sortDataByDate[name]});
    }

    return groupDataByDate.sort((a, b) => (parseFloat(a.date) > parseFloat(b.date)) ? 1 : -1)
}

// converting timestamps to date;
export const convertTimestampToDate = (timestamp)=> {
    let date = new Date(parseFloat(timestamp))
    return date.toDateString();
}