import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import {GiftItem}  from "../components/GiftItem"
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
  const {images, isLoanding} = useFetchGifs(category);

  
  
  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
          {
            
            images.map((image) => (
            <GiftItem key={image.id} {...image}></GiftItem>
            ))
          }
          </div>
        
        
        
      
    </>
  )
}
