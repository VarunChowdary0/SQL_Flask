import axios from "axios"
import { url } from "./API_URL"

const executeCommand = (
        host:string,
        username:string,
        password:string,
        db:string,
        command:string
) =>{
    return axios.post(url+"manage_my_sql",{
        host,username,password,db,command
    })
        .then((res)=>{
            return res;
        }) 
        .catch((err)=>{
            return err;
        })
}

export {executeCommand}