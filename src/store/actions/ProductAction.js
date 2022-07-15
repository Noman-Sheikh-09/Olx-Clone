import {db} from '../../config/Firebase'
// Fetch Product 

export const fetchProduct = ()=>async(dispatch)=>{
    try {
       const productArray = [];
       const snapShot = await db.collection("products").get();
       snapShot.forEach((singleProduct)=>productArray.push({...singleProduct.data(), docId:singleProduct.id})) ;

    } catch (error) {
        console.log(error);
    }
}