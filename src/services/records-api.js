import axios from "axios"
const URL = 'http://localhost:3001/records/'

export const getRecords = () => {
    const response = axios.get(URL)
    return response
}

export const getRecord = (id) => {
    const response = axios.get(`${URL}/${id}`)
    return response
}

export const deleteRecord = (id) => {
    const response = axios.delete(`${URL}/${id}`)
    return response
}

export const createRecord = (added) => {
    const response = axios.post(URL, added)
    return response
}

export const editRecord = (id, updated) => {
    const response = axios.put(`${URL}/${id}`, updated)
    return response
}