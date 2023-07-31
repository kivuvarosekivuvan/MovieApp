import React from "react";
import './style.css'
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL

const ImageContainer=({props})=>{
    return(
        <div className="image-container">
                <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt={props.title}/>
                </div>
    )
}

export default ImageContainer