import axios from "axios";

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID GHuUrsXZcM-8r_61xAg6Kgb2Vnx3n6Rbma-4XizmKBc',
    }
})