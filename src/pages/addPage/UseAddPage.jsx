import React, { useState } from "react";

// import { toast } from "react-toastify";
import { useDispatch } from "react-redux/es/exports";
import { postProduct } from "../../store/actions/ProductAction";
export default function UseAddPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [number, setNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

const fileHandler=(e)=>{
setFile(e.target.files[0])
setFileName(e.targe.fileName[0].name+number)
}


// const notify = () =>toast.success('🦄 Successfully Posted!', {
//   position: "top-right",
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: false,
//   draggable: true,
//   progress: undefined,
//   });;

const ctaPostHandler =()=>{

  if(title!=='' && description!=='' && price!=='' && category!=='' && location!=='' ){
    let productData = {
      title:title,
      description:description,
      price:price,
      location:location,
      category:category,
      userId:userId,
        }
        
dispatch(postProduct(fileName,productData,image,setImage,file,setFile))

}
else{
    alert("Please fill all fields")
}
}
 


  return [
    {
      title,
      setTitle,
      description,
      setDescription,
      price,
      setPrice,
      location,
      setLocation,
      category,
      setCategory,fileHandler,
      file,setFile,fileName,setFileName,ctaPostHandler
    },
  ];
}
