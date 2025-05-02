import React from "react";
import img4 from '../assets/login.jpg'
export default function Loginpage(){
    const backgroundStyle = {
        backgroundImage: `url(${img4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return(
        <>
        <div style={backgroundStyle}>
        <form style={{ borderRadius:"20px",border:"2px solid white", height:"500px", width:"400px",textAlign:"center",textshadow:"20px2px 2px 4px rgba(0,0,0,0.7)"}}>
        <h1 style={{fontWeight:"bolder",fontSize:"50px",marginTop:"100px", color:"white"}}>LOGIN</h1>
            <p><input type="text" placeholder="Enter your Username" required/></p>
            <p><input type="password" placeholder="Enter your Password" required/></p>
            <p><button style={{borderRadius:"20px"}}>Submit</button></p>
            <p><a href="reg" style={{textDecoration:"none"}}>New User? Register</a></p>
        </form>
        </div>
        </>
    )
}