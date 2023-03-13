import React from "react"
import Galleryimg from "./Pieces/Galleryimg";
import Tittlesection from "./Pieces/Tittlesection";
import amazingbox from "../../../Assets/Projectimages/amazingbox.webp";
import asigndesiner from "../../../Assets/Projectimages/asigndesiner.webp";
import bank from "../../../Assets/Projectimages/bank.webp";
import bombaygold from "../../../Assets/Projectimages/bombaygold.webp";
import flexprinting from "../../../Assets/Projectimages/flexprinting.webp";
import machinephoto from "../../../Assets/Projectimages/machinephoto.webp";
import naidu from "../../../Assets/Projectimages/naidu.webp";
import navarathri from "../../../Assets/Projectimages/navarathri.webp";
import qrscan from "../../../Assets/Projectimages/qrscan.webp";
import runningflex from "../../../Assets/Projectimages/runningflex.webp";
import vinnisdental from "../../../Assets/Projectimages/vinnisdental.webp";
import visaads from "../../../Assets/Projectimages/visaads.webp";



const Project = () => {


    const galleryImages = [
        {
            alt: "mazingbox",
            caption: "img 001",
            img: amazingbox
        },
        {
            alt: "asigndesiner",
            caption: "img 002",
            img: asigndesiner
        },
        {
            alt: "bank",
            caption: "img 003",
            img: bank
        },
        {
            alt: "bombaygold",
            caption: "img 004",
            img: bombaygold
        },
        {
            alt: "flexprinting",
            caption: "img 005",
            img: flexprinting
        },
        {
            alt: "machinephoto",
            caption: "img 006",
            img: machinephoto
        },
        {
            alt: "naidu",
            caption: "img 007",
            img: naidu
        },
        {
            alt: "navarathri",
            caption: "img 008",
            img: navarathri
        },
        {
            alt: "qrscan ",
            caption: "img 009",
            img: qrscan
        },
        {
            alt: "runningflex",
            caption: "img 010",
            img: runningflex
        },
        {
            alt: "vinnisdental",
            caption: "img 011",
            img: vinnisdental
        },
        {
            alt: "visaads",
            caption: "img 012",
            img: visaads
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