import axios from "axios"
import { url } from "./API_URL"

const sendInfo = (data:string,name:string) =>{
    console.log(data)
    return axios.post(url+"reciveData",{
        info : data,
        name
    })
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err;
    })
}

export {sendInfo}