import React, { useState } from 'react';
const Loginform =()=>{
    //usestate hook1 to set credentials
const [userLogin,setuserLogin]=useState({
    email:'',
    password:''
});
      // usestate hook2 to save records
      const [Records,setRecords]= useState([]);
    //   input handles on change in input field
    const inputHandle=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log(name,value);
        setuserLogin({...userLogin,[name]: value})// dynamically fetch and set values 
    }
     //   submit handle on form submit
    const handleSubmit=(event) =>{
        event.preventDefault();
        const newRecord={...userLogin,id:new Date().getTime().toString()}
        setRecords([... Records,newRecord]);
        
    }

    return(
        <>
        <h3>Login Form with hooks</h3>
        
        <form action=''  onSubmit={handleSubmit} >
                <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" value ={userLogin.email} name='email' onChange={inputHandle} id="email" placeholder="Email"/>

                        </div>
            </div>
            <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" value ={userLogin.password}  name='password' onChange={inputHandle}  id="password" placeholder="Password"/>

                        </div>
             </div>
             <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">login</button>
                </div>
             </div>
  </form>
  {/* map method to show */}
<div> {
    Records.map((currentElement)=>{
        return(
            <div className='bg-warning'>
                <p>{currentElement.email}</p>
                <p>{currentElement.password}</p>
            </div>
        )
    })
    }</div>
        </>
    );
}
export default Loginform;