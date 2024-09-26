import axios from "axios"
import { url } from "./API_URL"

const signup = (info:{
    fullName:string,
    mailAddress:string,
    username:string,
    password:string
}) =>{
    return axios.post(url+"testSignUp",{
        info
    })
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
        })
}

export {signup};