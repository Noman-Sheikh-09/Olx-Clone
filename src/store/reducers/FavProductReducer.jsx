import {FAV_PRODUCT,UNFAV_PRODUCT,GET_FAVOURITE} from "../type/Type";
const initialState = {
    favProducts:[]
}

export const FavProductReducer = (state=initialState,action)=>{
    switch (action.type) {
        case FAV_PRODUCT:
            let newData = state.favProducts;
            newData.push(action.payload)
            return {
                ...state,
                favProducts: newData,
            }
            case GET_FAVOURITE:
           console.log('get fvrt',action.payload);
            return {
                ...state,
                favProducts: action.payload,
            }
        default:
            return state;
    }
}

