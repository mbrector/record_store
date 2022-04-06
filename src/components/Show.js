import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { deleteRecord, getRecord } from '../services/records-api'

function Show() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [records, setRecords] = useState({})
    useEffect(() => {
        getRecord(id)
        .then(res => setRecords(res.data))
    }, [])

        const deleteTheRecord = () => {
            deleteRecord(id)
            navigate('/')
        }

  return (
      <div className="record">
        <h2>{records.albumTitle}</h2><br />
        <img src={records.coverArt} /><br />
        <h3>{records.artist}</h3>
        <h3>{records.year}</h3>
        <h3>{records.genre}</h3>
        <button onClick={() => {navigate(`/${id}/Edit`)}}>Edit Record</button>
        <button onClick={deleteTheRecord}>Delete</button>
    </div>
  )
}

export default Show