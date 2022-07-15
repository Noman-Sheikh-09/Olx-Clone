import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  GET_USER_ON_AUTH_STATE_CHANGE,
} from "../type/Type";
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
      payload: user,
    });
    navigate("/add");
  } catch (error) {
    console.log(error);
  }
};

export const doSignup = (newUserData, navigate) => async (dispatch) => {
  console.log("data in action", newUserData);
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      newUserData?.email,
      newUserData?.password
    );
    const userData = userCredential.user;

    const dbData = await db.collection("users").add(newUserData);
    console.log("dbData", dbData);
    dispatch({
      type: SIGNUP,
      payload: userData,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const doGetActiveUser = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: GET_USER_ON_AUTH_STATE_CHANGE,
          paylaod: user,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
 export const doLogout = () => async (dispatch) => {
  try {
    const resValue = await auth.signOut();
 
    dispatch({
      type: LOGOUT,
    })
  } catch (error) {
    console.log(error);
  }
 }