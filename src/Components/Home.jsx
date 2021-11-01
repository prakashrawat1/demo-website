import React from "react";
import { NavLink } from "react-router-dom";
// import Image1 from "../Images/smoke.jpg"
const Home=()=>{
    return(
        <>
        
        <section id="header" className="">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 grow-bussiness order-2 0rder-lg-1">
    <h1>Grow your bussiness with <strong className="brand-name">our company</strong></h1>
    <h2 className="my-3">We are the team of talented developer making websites</h2>
    <div className="mt-5">
        <NavLink className="getbtn" to="">Get Started</NavLink>
    </div>
</div>

{/* <div className=" pic col-md-6 order-1 order-lg-2"><img src={Image1} alt="" /></div> */}
</div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;