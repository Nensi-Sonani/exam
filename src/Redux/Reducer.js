import { ERROR, LOADING, SUCCESS } from "./ActionType"

let init={
    isLoading:false,
    isError:false,
    isSuccess:[]
}

export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case LOADING:
            return{
                ...state,
                isLoading:true
            }

        case SUCCESS:
            return{
                ...state,
                isLoading:false,
                isSuccess:payload
            }

        case ERROR:
            return{
                ...state,
                isError:true
            }
        default: return state
    }
}