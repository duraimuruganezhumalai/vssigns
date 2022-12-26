import React from "react"
import Galleryimg from "./Pieces/Galleryimg";
import maldives from "../../../Assets/Home/borabora.jpg";
import maldives2 from "../../../Assets/Home/borabora2.jpg";
import maldives3 from "../../../Assets/Home/borabora.jpg";
import Tittlesection from "./Pieces/Tittlesection";


const Project = () => {


    const galleryImages = [
        {
            alt: "maldives1",
            caption: "icon 001",
            img: maldives
        },
        {
            alt: "maldives2",
            caption: "icon 002",
            img: maldives2
        },
        {
            alt: "maldives3",
            caption: "icon 003",
            img: maldives3
        },
        {
            alt: "maldives4",
            caption: "icon 004",
            img: maldives2
        },
        {
            alt: "maldives5",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives6",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives7",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives8",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives9",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives10",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives11",
            caption: "icon 005",
            img: maldives
        },
        {
            alt: "maldives12",
            caption: "icon 005",
            img: maldives
        }


    ]


    return (
        <React.Fragment>
            <section className="relative w-full overflow-hidden bg-white">
                <Tittlesection />
                <div className="container mx-auto">
                    <Galleryimg galleryImages={galleryImages} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Project;