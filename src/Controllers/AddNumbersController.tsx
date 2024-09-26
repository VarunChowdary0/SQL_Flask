import axios from "axios";
import { url } from "./API_URL";

const AddNums = (a:number,b:number) =>{
    return axios.post(url+"getSum",{
        a,b
    })
    .then((res)=>{
        if(res){
            console.log(res)
            return {status:true,data : res.data}
        }
    })
    .catch((err)=>{
        console.log(err)
        return { status : false , data : {}}
    })
}

export {AddNums};