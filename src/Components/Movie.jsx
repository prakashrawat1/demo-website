import React from "react";
import { MovieData } from "./Data";
const Movie=(props)=>{
    return(
        <>
       <>
<div className="col-md-4">
<div className="cards">
<div className="card">
    <img src={props.imgsrc} alt="mypic"  className="card_img" />
<div className="card_info">
    <span className="card_category">{props.title}</span>  
    <h3 className="card_title">{props.sname}</h3>
    <a href={props.link} target="_blank" rel="noreferrer">
    <button>Watch Now</button>
    </a>
</div>
</div>
</div>
</div>
</>
        </>
    )
}

const MovieShow = () =>{
    return(
    
    
    <>
     
    
    <div className="container movie">
      <div className="row g-3">
      <h1 className="heading">List Of Top 5 Netflix Series In 2020</h1>
            {MovieData.map(function ncard(val){
      return(<Movie key={val.id} imgsrc={val.imgsrc} sname={val.sname} title={val.title} link={val.link}/>)
     
    })
    }
      </div>
    </div>
    
      </>
    
    
    );
    
    }
    

export default Movie;
export  {MovieShow};