import React from "react";
import Imagegallery from "./Pieces/Project_img.json";



const Project = () => {



    return (
        <React.Fragment>
            <div>
                {
                    Imagegallery && Imagegallery.map((img, index) => {
                        return (
                            <ul>
                                <li key={index} >
                                    <img src={img.projectimage} alt={img.alt} />
                                    <br />
                                    {img.caption}
                                </li>
                            </ul>
                        )

                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Project; 