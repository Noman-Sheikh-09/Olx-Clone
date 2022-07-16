import {FETCH_PRODUCT} from '../type/Type'

const initialState={
    fetchArray:[]
}

function ProductReducers (state=initialState,action ){
    switch(action.type){
        case FETCH_PRODUCT:
         return{
             ...state,
             fetchArray:action.payload,
         }
         default:
            return state
        }
   
}

export default ProductReducers;