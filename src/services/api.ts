import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://demo.stbl.com.br/estoque/'
})