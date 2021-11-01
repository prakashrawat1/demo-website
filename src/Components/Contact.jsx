import React from "react";
import { useState } from "react";

const Contact=()=>{
const[data,setData]=useState({
    fname:"",
    phone:"",
    email:""
})

const inputField=(event)=>{
const{name,value}=event.target;  

setData((preval)=>{
    return{
        ...preval,[name]:value,
    };
});
};

const formsubmit=(e)=>{
    e.preventDefault();
    alert(`my name is ${data.fname}. my mobile number is ${data.phone}. `)
}
    return(
        <>
        <div className="container-fluid form0">
            <div className="row">
                <div className="col-10 form">
                <form onSubmit={formsubmit}>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" name="fname" value={data.fname} onChange={inputField}>Full Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" name="phone" value={data.email} onChange={inputField}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" name="email" value={data.phone} onChange={inputField}>Phone</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter your phone name"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;