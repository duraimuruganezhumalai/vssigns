import React from 'react';
// import beachVid from '../../../../Assets/Home/beachVid.mp4';
import machinephoto from "../../../../Assets/Projectimages/machinephoto.webp";

const Banner = () => {
    return (
        <div className='w-full relative'>
            {/* <video
                className='w-full h-full object-cover'
                src={beachVid}
                autoPlay
                loop
                muted
            />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1 className='text-3xl font-extrabold tracking-tight'>Chennai Latest Signage</h1>
                <h2 className='text-3xl font-extrabold tracking-tight py-4'>Perfect finishing</h2>
            </div> */}
            <img src={machinephoto} object-cover />
        </div>
    );
};

export default Banner;
