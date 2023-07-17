import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a62d6c736d1d499c8a401075f6f0532d'
    }
})