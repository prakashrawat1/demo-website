import React from "react";
import Card from './Cards';
import Data from './Data'
const Gallery=()=>{
    return(
        <>
        
        <section className="card1">
            <div className="container-fluid">
                <div className="row g-3">
                    <h1>Gallery</h1>
{Data.map((val,ind)=>{
return <Card key={ind} img={val.img} title={val.title} desc={val.desc}/>
})}
                    

                </div>
            </div>
        </section>
        </>
    )
}

export default Gallery;