import React from "react";
import CountUp from 'react-countup';





const Happycustomers = () => {


    return (
        <React.Fragment>


            {/* <section classNameName="bg-white dark:bg-gray-900 pt-8 lg:pt-20">
                <div classNameName="mx-auto max-w-screen-xl">
                    <h2 classNameName="mb-10 text-3xl font-extrabold tracking-tight text-center text-gray-900">Our Projects</h2>
                    <div style={{ fontSize: '15px' }}>
                        <CountUp
                            start={0}
                            end={100000}
                            duration={3}
                        />
                    </div>
                </div>
            </section> */}

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our Projects</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 lg:space-y-0">

                        <div className="flex items-center justify-center flex-col max-w-lg w-11/12 p-2 h-32 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-md shadow">
                            {/* <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
                            <div className="">
                                <span className="text-4xl text-red-500 font-bold" style={{ fontSize: '30px' }}>
                                    <CountUp
                                        start={0}
                                        end={150}
                                        duration={0.5}
                                    />
                                    +
                                </span>
                            </div>
                            <div className="">
                                <span className="text-gray-500">Happy Clients</span>
                            </div>
                        </div>


                        <div className="flex items-center justify-center flex-col max-w-lg w-11/12 p-2 h-32 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-md shadow">
                            {/* <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
                            <div className="flex items-center justify-center">
                                {/* <span className="text-4xl text-red-500 font-bold">2 +</span> */}
                                <span className="text-4xl text-red-500 font-bold" style={{ fontSize: '30px' }}>
                                    <CountUp
                                        start={0}
                                        end={2}
                                        duration={0.5}
                                    />
                                    +
                                </span>
                            </div>
                            <span className="text-gray-500">Successful Years</span>
                        </div>



                        <div className="flex items-center justify-center flex-col max-w-lg w-11/12 p-2 h-32 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-md shadow">
                            {/* <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
                            <div className="flex items-center justify-center">
                                {/* <span className="text-4xl text-red-500 font-bold">125 +</span> */}
                                <span className="text-4xl text-red-500 font-bold" style={{ fontSize: '30px' }}>
                                    <CountUp
                                        start={0}
                                        end={125}
                                        duration={0.5}
                                    />
                                    +
                                </span>
                            </div>
                            <span className="text-gray-500 dark:text-gray-400">Projects</span>
                        </div>

                        <div className="flex items-center justify-center flex-col max-w-lg w-11/12 p-2 h-32 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-md shadow">
                            {/* <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
                            <div className="flex items-center justify-center">
                                {/* <span className="text-4xl text-red-500 font-bold">99 <span className="text-3xl">%</span></span> */}
                                <span className="text-4xl text-red-500 font-bold" style={{ fontSize: '30px' }}>
                                    <CountUp
                                        start={0}
                                        end={99}
                                        duration={0.5}
                                    />
                                    <span className="text-3xl">%</span>
                                </span>
                            </div>
                            <span className="text-gray-500 dark:text-gray-400">Customer Satisfaction</span>
                        </div>

                    </div>
                </div>
            </section>






            {/* <div className="flex flex-row justify-between  bg-black">
                <div className="flex-nowrap w-1/4">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl mb-5 md:mb-0 lg:-mb-0 2xl:mb-0 text-white">
                            <span className="change-me">1</span> CHF</h1>

                    </div>
                </div>

                <div className="flex-nowrap w-1/4">

                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl mb-5 md:mb-0 lg:-mb-0 2xl:mb-0 text-white">+ 5.78%</h1>
                    </div>
                </div>

                <div className="flex-nowrap w-1/4">

                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl mb-5 md:mb-0 lg:-mb-0 2xl:mb-0 text-white">+ 2.21%</h1>

                    </div>
                </div>

                <div className="flex-nowrap w-1/4">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl mb-5 md:mb-0 lg:-mb-0 2xl:mb-0 text-white">+ 2.21%</h1>
                    </div>
                </div>
            </div> */}

        </React.Fragment >
    )
}

export default Happycustomers;