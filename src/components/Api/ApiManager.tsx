import axios from 'axios';
//import { DecryptData } from '../../utils/DecryptData';

//const token = DecryptData(localStorage.getItem('Copilot')!) 

//const token = sessionStorage.getItem('accessToken')
//localStorage.setItem("Copilot", DecryptData(token));
//const token = JSON.parse(sessionStorage.getItem('accessToken') || '{}');
//console.log('Token',token)
const AuthManager = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers:{
        "Content-type" : "application/json",
        // "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});
const PostManager = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers:{
        "Content-type" : "application/json",
        // "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});
const GetManager = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers:{
        "Content-type" : "application/json",
        // "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});
const GetsManager = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers:{
        "Content-type" : "application/json",
        //"Content-type" : "Authorization",
        //"Authorization" : `Bearer ${token}`
    }
});


export {AuthManager, PostManager, GetManager, GetsManager};