import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../store/actions/AuthAction';
import { useNavigate } from 'react-router-dom';
export default function UseHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler=()=>{
        console.log("logoutandler press");
dispatch(doLogout(navigate("/login")))
    }
  return[{
    logoutHandler
  }]
}
