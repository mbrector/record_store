import {React, useState, useEffect} from 'react'
import {getRecords} from '../services/records-api'

function Records() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        getRecords()
        .then(res => setRecords(res.data))
    }, [])

    return (
        <div>
            <h1>Record Store</h1>
            <div className="records">
                {records.map((record, i) => {
                    return(
                        <a href={`/${record._id}`}>
                            <div className="record" key = {i}>
                                <h3>{record.albumTitle}</h3>
                                <img src={record.coverArt} />
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Records