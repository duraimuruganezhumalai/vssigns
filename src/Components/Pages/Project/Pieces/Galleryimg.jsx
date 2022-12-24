import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'




const Galleryimg = ({ galleryImages }) => {


    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }
    console.log(handleOpenModal)

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }




    return (
        <section className="overflow-hidden text-gray-700">
            {openModal &&
                <div className="flex justify-center items-center fixed w-full h-full top-0 right-0 bottom-0 left-0 bg-black z-50">
                    <FontAwesomeIcon icon={faCircleXmark} className="fixed top-10 right-10 bg-black opacity-60 z-50 cursor-pointer hover: opacity-100" onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='fixed top-2/4 left-10  cursor-pointer z-50 opacity-60 bg-black hover: opacity-100 -translate-y-2/4' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='fixed top-2/4 right-10 cursor-pointer opacity-60 bg-white z-50 hover: opacity-100 -translate-y-2/4' onClick={nextSlide} />
                    <div className='flex justify-center items-center '>
                        <img src={galleryImages[slideNumber].img} alt='' />
                    </div>
                </div>
            }


            <div className="px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex justify-center flex-wrap -m-1 md:-m-2">
                    {
                        galleryImages && galleryImages.map((slide, index) => {
                            return (
                                <div
                                    className='w-3/12 cursor-pointer max-w-full px-1 mb-2'
                                    // className='"flex flex-wrap w-1/3"'
                                    key={index}
                                // onClick={ () => handleOpenModal(index) }
                                >
                                    {/* <div className=" w-full p-1 md:p-2"> */}
                                    <img
                                        className="block object-cover object-center w-full h-full transition-all duration-300 filter grayscale hover:grayscale-0"
                                        src={slide.img}
                                        alt={slide.alt}
                                        onClick={() => handleOpenModal(index)}
                                    />
                                    {/* <br /> */}
                                    {/* <span className="">{slide.caption}</span> */}
                                    {/* </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default Galleryimg;