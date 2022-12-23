import React from "react"


const Galleryimg = ({ galleryImages }) => {




    return (
        <section className="overflow-hidden text-gray-700">
            <div className="px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex justify-center flex-wrap -m-1 md:-m-2 gap-1">
                    {
                        galleryImages && galleryImages.map((slide, index) => {
                            return (
                                <div
                                    className='w-3/12 cursor-pointer max-w-full'
                                    // className='"flex flex-wrap w-1/3"'
                                    key={index}
                                // onClick={ () => handleOpenModal(index) }
                                >
                                    {/* <div className=" w-full p-1 md:p-2"> */}
                                    <img className="block object-cover object-center rounded-md w-full h-full" src={slide.img} alt='' />
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