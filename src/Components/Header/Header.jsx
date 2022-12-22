import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Project from "../Pages/Project/Project";
import Contactus from "../Pages/Contactus/Contactus";





const Header = () => {




    return (
        <React.Fragment>
            <div className="">
                <Navbar />
                <div className="">
                    <Routes className="">
                        <Route path="/contact-us" element={<Contactus />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;