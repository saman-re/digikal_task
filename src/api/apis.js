import Axios from './axios_config';

export const PLP=async(params) => {
    let data = await Axios.get('search/', {
        params,
    });
    return data;
}

export const PDP=async(ID) =>{
    let data = await Axios.get(`product/${ID}/`)
    return data;
}