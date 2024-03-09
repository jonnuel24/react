import { toast } from "react-toastify";

const success = (message) => toast.success(message,{
    position:'top-right'
})
const error = (message) => toast.success(message,{
    position:'top-right'
})

export const notification=(message, type)=>{
    switch (type){
        case 'success': 
            toast.success(message, {
                position:'top-right'
            })
            break;
        case 'error':
            toast.info(message, {
                position:'top-left'
            })
            break;
        case 'info':
            toast.info(message, {
                position:'top-left'
            })
            break;
        default :
            break;
    }
}