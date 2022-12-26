import React from "react";
import Aboutus from "./Pieces/Aboutus";
import Banner from "./Pieces/Banner"
import Facility from "./Pieces/Facility";
import Happycustomers from "./Pieces/Happycustomers";
import Ourclients from "./Pieces/Ourclients";
import Testimonials from "./Pieces/Testimonials";

const Home = () => {


    return (
        <React.Fragment>
            <Banner />
            <Aboutus />
            <Ourclients />
            <Facility />
            <Happycustomers />
            <Testimonials />
        </React.Fragment>
    )
}

export default Home;