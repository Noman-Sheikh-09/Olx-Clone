import { LOGIN } from "../type/Type";

const initialState= {
    isUserLoggedIn : false,
    user: {}
}

export const AuthReducer=(state=initialState, action)=>{
switch (action.type) {
    case LOGIN: {
        return {
          ...state,
          isUserLoggedIn: true,
          user: action.payload,
        }
    }
    default:
        return state;
}
}