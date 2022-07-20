import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addFavProduct, getFavproduct } from "../../store/actions/FavProductAction";
export default function UseFvrt() {
  const userId = useSelector(state=>state.AuthReducer.user?.uid)
  const dispatch = useDispatch();
  const [favLoading, setFavLoading] = useState(false);
  const [unFavLoading, setUnFavLoading] = useState(false);
// const getFavArray = useSelector(state=>state.FavProductReducer.favProducts)
  const favButtonHandler = (singleProduct) => {
  
    dispatch(addFavProduct(singleProduct,userId ,setFavLoading));
  };
  useEffect(() => {
    dispatch(getFavproduct())
  }, [])
  

  return[{
     favButtonHandler, 
    setFavLoading, 
    setUnFavLoading
   }];
}

