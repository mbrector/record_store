import {React} from 'react'
import {useNavigate} from "react-router-dom"
import {createRecord} from '../services/records-api'

function New() {
    const navigate = useNavigate()

    const createTheRecord = event => {
        event.preventDefault()
        let added = {
            artist: event.target.artist.value,
            albumTitle: event.target.albumTitle.value,
            coverArt: event.target.coverArt.value,
            year: event.target.year.value,
            genre: event.target.genre.value}
        console.log(added)
        createRecord(added)
        navigate('/')
    }
  return (
    <div>
        <h2>Add a Record</h2>
        <form onSubmit={createTheRecord}>
            Artist: <input type='text' name="artist"/><br />
            Album Title: <input type='text' name="albumTitle"/><br />
            Cover Art: <input type='text' name="coverArt"/><br />
            Year: <input type='number' name="year"/><br />
            Genre: <input type='text' name="genre"/><br />
            <input type='submit' />
        </form>
    </div>
  )
}

export default New