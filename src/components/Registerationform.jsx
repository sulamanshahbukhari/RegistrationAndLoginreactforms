import React, { useState } from 'react';
const Registerationform=()=>{
    // usestate hook
    const [userRegistration ,setuserRegistration]= useState({
        username:"",
        email:"",
        password:""
    });
      // usestate hook2 to save records
      const [Records,setRecords]= useState([]);

    const handleInput=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log(name,value);
        setuserRegistration({...userRegistration,[name]: value})//dynamically set data into userRegistration hook

    }
    //store field values in the form of array and set state in usestate hook of records
    const handleSubmit=(event) =>{
        event.preventDefault();
        const newRecord={...userRegistration,id:new Date().getTime().toString()}
        setRecords([... Records,newRecord]);
        
    }
return(
    <>
    <h3>Registeration form</h3>
    <form action='' onSubmit={handleSubmit}>
    <div className="form-group row">
    <label htmlFor="username" className="col-sm-2 col-form-label">Full Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name='username' 
      value={userRegistration.username} onChange={handleInput} id="username" placeholder="Full Name"/>

    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" name='email' 
      value={userRegistration.email} onChange={handleInput} id="email" placeholder="Email"/>

    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" name='password' 
      value={userRegistration.password} onChange={handleInput} id="password" placeholder="Password"/>

    </div>
  </div>
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Register</button>
    </div>
  </div>
</form>
{/* map method to show */}
<div> {
    Records.map((currentElement)=>{
        return(
            <div className='bg-warning'>
                <p><span>name : </span>{currentElement.username}</p>
                <p><span>email: </span>{currentElement.email}</p>
                <p><span>passsword: </span>{currentElement.password}</p>
            </div>
        )
    })
    }</div>
    </>
);

}
export default Registerationform;