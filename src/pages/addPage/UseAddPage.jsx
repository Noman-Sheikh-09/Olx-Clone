import React, { useState } from "react";

export default function UseAddPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const categoryHandle = (event) => {
    setCategory(event.target.value);
  };
  const locationHandler =(event) =>{
    setLocation(event.target.value)
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
      setCategory,categoryHandle,locationHandler
    },
  ];
}
