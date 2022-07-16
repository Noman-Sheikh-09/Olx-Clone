import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProduct } from '../../store/actions/ProductAction';
export default function UseAllProducts() {

    const getProductsArray= useSelector(state=>state.ProductReducers.fetchArray)
    console.log('data from useSelector',getProductsArray);
const dispatch = useDispatch();
    useEffect(() => {
     dispatch(fetchProduct())
    }, [])
    

  return[{

    getProductsArray
  }]
}