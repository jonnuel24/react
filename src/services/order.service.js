import axios from "axios";
let baseUrl = `${process.env.REACT_APP_BASEURL}orders`;
export const OrderServices={
    checkout:async (payload)=>{
        try{
            const response=await axios.post(`${baseUrl}`,payload);
            return response;
        }catch(e){
            return {
                status:500,
                data:{
                    error:"something went wrong"
                }
            }
        }
    },
    orders:async ()=>{
        try{
            const response=await axios.get(`${baseUrl}/user`);
            return response;
        }catch(e){
            return {
                status:500,
                data:{
                    error:"something went wrong"
                }
            }
        }
    } 
}