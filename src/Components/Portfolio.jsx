import React, {useState}from "react";


const Sresult=(props)=>{
    const image=`https://source.unsplash.com/1600x900/?${props.name}`;
    return(
    <>
    <div className="search_img">
        <img src={image} alt="search" srcset="" />
    </div>
    </>
    )
}


const Portfolio=()=>{

    const [img,setImg] = useState("");
    const inputEvent=(event)=>{
        setImg(event.target.value);
    }
return(
    <>
    <div className="search_bar">
    <input type="text" placeholder="search anything" 
    // value={img}
    onChange={inputEvent}/>
    {img === ""? null : <Sresult name={img}/> }
    
    </div>

    
    </>
    
)
}

export {Portfolio};

export default Sresult;
