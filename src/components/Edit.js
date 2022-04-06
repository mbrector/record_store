import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { editRecord, getRecord } from '../services/records-api'


function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [data, setData] = useState({})

    useEffect(() => {
        getRecord(id)
        .then(res => setData(res.data))
    }, [])

    const editTheRecord = event => {
        event.preventDefault()
        let updated = {
            artist: event.target.artist.value,
            albumTitle: event.target.albumTitle.value,
            coverArt: event.target.coverArt.value,
            year: event.target.year.value,
            genre: event.target.genre.value}
        editRecord(id, updated)
        navigate(`/${id}`)
    }
  return (
    <div>
        <h2>Edit Record</h2>
        <form onSubmit={editTheRecord}>
            <input type='text' name="artist" defaultValue={data.artist}/><br />
            <input type='text' name="albumTitle" defaultValue={data.albumTitle}/><br />
            <input type='text' name="coverArt" defaultValue={data.coverArt}/><br />
            <input type='number' name="year" defaultValue={data.year}/><br />
            <input type='text' name="genre" defaultValue={data.genre}/><br />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Edit