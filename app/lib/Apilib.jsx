import axios from "axios";

const Apilib = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1',
    headers:{
        'api-key' : 'raONjpklsvic5dG7ok9IQ6UCWDIUtz1fZDWpSwPhqFQEXGzVSY5o0zbzaudLGe8i'
    },
})

export default Apilib;