import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import Navbars from '../Navbar/Navbar';
import "./ForgetPass.css"

initializeAuthentication()
const ForgetPass = () => {
    const auth = getAuth();
    const [forgetPass, setForgetPAss] = useState('');
    const [done, setDone] = useState(true);
    console.log(forgetPass)
    const forgetPassHandle = (e) =>{
        setForgetPAss(e.target.value)

    }
    const submitForget = (e) =>{
        e.preventDefault();
        
sendPasswordResetEmail(auth, forgetPass)
  .then(() => {
    setDone(false)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }
    return (<>
        <Navbars></Navbars>
       {!done &&  <div className='w-25 mx-auto mt-5' style={{border:"1px solid #fccf11", padding:"30px",borderRadius:"8px"}} >
            <img width="25%" src="./emailsent.png" alt="" />
            <div className='my-3'>
            <span style={{fontFamily:"poppins",fontSize:"24px",fontWeight:"700",color:"#fccf11"}}>Check Your Email</span>
            <br />
            <button onClick={()=>{setDone(true)}} style={{fontFamily:"poppins",fontSize:"20px",fontWeight:"600",color:"white",backgroundColor:"red",padding:'8px',marginTop:"15px"}}>Resend Email</button>
            </div>
          
            
        </div>}
       {done &&  <div className='w-25 mx-auto mt-5' style={{border:"1px solid #fccf11", borderRadius:"8px"}} >
            <img width="100%" src="./reset-password.png" alt="" />
            <div className='mb-3'>
            <span style={{fontFamily:"poppins",fontSize:"24px",fontWeight:"700",color:"#fccf11"}}>Reset Password</span>
            </div>
           <form onSubmit={submitForget}  action="">
               <input name='name' type='name' onChange={forgetPassHandle}  style={{border:"2px solid #fccf11"}} className='mb-3' type="password" placeholder='Enter Your Email' />
               <button type="submit" style={{backgroundColor:"#fccf11",color:"white",padding:"10px", fontWeight:"600",fontSize:"18px",marginBottom:"20px"}}>Reset Password</button>
           </form>
            
        </div>}
        </>);
};

export default ForgetPass;