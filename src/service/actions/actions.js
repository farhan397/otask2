import {SAVE_LIST} from '../constants'
export const AddToSaveData =(data)=>{
     console.log("action",data)
    return {
        type:SAVE_LIST,
        data:data
    }
}
