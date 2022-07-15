import { LOGIN } from "../type/Type";
import { auth, db } from "../../config/Firebase";

export const doLogin = (userData, navigate) => async (dispatch) => {
    console.log("data in action", userData);
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      userData?.email,
      userData?.password
    );
    
    const user = userCredential.user;
    dispatch({ 
        type: LOGIN,
         payload: user 
        });
        navigate("/")
  } catch (error) {
console.log(error);
  }
};
