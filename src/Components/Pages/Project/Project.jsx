import React from "react"
import Galleryimg from "./Pieces/Galleryimg";
import maldives from "../../../Assets/Home/borabora.jpg";
import maldives2 from "../../../Assets/Home/borabora2.jpg";
import maldives3 from "../../../Assets/Home/borabora.jpg";


const Project = () => {


    const galleryImages = [
        {
            caption: "icon 001",
            img: maldives
        },
        {
            caption: "icon 002",
            img: maldives2
        },
        {
            caption: "icon 003",
            img: maldives3
        },
        {
            caption: "icon 004",
            img: maldives2
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        },
        {
            caption: "icon 005",
            img: maldives
        }


    ]


    return (
        <React.Fragment>
            <section className="relative w-full overflow-hidden bg-white py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <Galleryimg galleryImages={galleryImages} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Project;