import React, { useState } from "react";
import img5 from "../assets/regbg.jpg"
export default function Registrationpage(){
    const backgroundStyle={
        backgroundImage:`url(${img5})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: '100vh', 
        display: 'flex',
        justifyContent:"center",
        alignItems:"center"
    }
        const [user,setUser]=useState({
            name:"",
            email:"",
            city:"",
            state:"",
            username:"",
            password:""
        })
        const [message, setMessage] = useState("");
      const [messageColor, setMessageColor] = useState("red");
    
        const handleChange=(e)=>{
            setUser({...user,[e.target.name]:e.target.value})
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            console.log("User Details",user)
            const { name, email,city,state, username, password } = user;
       
        if (!name || !email || !username || !password || !city || !state) {
            setMessage("REQUIRED FIELDS ARE MISSING");
            setMessageColor("red");
          } else if (!name.match(/^[A-Za-z]+/)) {
            setMessage("Enter your correct name");
            setMessageColor("red");
          } else if (
            !email.match(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            )
          ) {
            setMessage("Enter Valid Email id");
            setMessageColor("red");
          }
          else if(
            !city.match(/^([a-zA-Z\u0080-\u024F]+(?:(\. )|-| |'))*[a-zA-Z\u0080-\u024F]*$/)){
                  setMessage("Enter valid Username")
                  setMessageColor("red");
            }
          else if(
            !username.match(/^[0-9A-Za-z]{6,16}$/)){
                  setMessage("Enter valid Username")
                  setMessageColor("red");
            }else if (
            !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
          ) {
            setMessage("Password can't be taken");
            setMessageColor("red");
          } else {
            setMessage("FORM SUBMITTED SUCCESSFULLY");
            setMessageColor("limegreen");
            console.log("USERNAME:", name);
            console.log("EMAIL-ID:", email);
            console.log("CITY:", city);
            console.log("STATE:", state);
            console.log("USERNAME:",username);
            console.log("PASSWORD:", password);
          }
        }
      
    return(
        <>
        <div style={backgroundStyle}>
        <form style={{borderRadius:"20px",border:"2px solid white", height:"600px", width:"500px",textAlign:"center",bordershadow:"20px2px 2px 4px rgba(0,0,0,0.7)"}} onSubmit={handleSubmit} id="myform" >
        <h1 style={{fontWeight:"bolder",fontSize:"50px", marginTop:"30px" ,color:"white", textShadow:"2px 2px 4px rgba(0,0,0,0.7)"}}>REGISTER</h1>
        <p><input type="text" placeholder="Enter Your FullName" name="name" onChange={handleChange}/></p>
        <p><input type="email" placeholder="Enter Your Email id" name="email" onChange={handleChange}/></p>
        <p><input type="text" placeholder="Enter Your City" name="city" onChange={handleChange}/></p>
        <p><select defaultValue="other" required style={{ padding: "10px", borderRadius: "5px",height:"50px",width:"200px",fontSize:"10px"}} name="state" onChange={handleChange}>
            <option value="Andhra pradesh">ANDHRA PRADESH</option>
            <option value="Arunachal Pradesh">ARUNACHAL PRADESH</option>
            <option value="Assam">ASSAM</option>
            <option value="Bihar">BIHAR</option>
            <option value="Chhattisgarh">CHHATTISGARH</option>
            <option value="Goa">GOA</option>
            <option value="Gujarat">GUJARAT</option>
            <option value="Haryana">HARYANA</option>
            <option value="Himachal pradesh">HIMACHAL PRADESH</option>
            <option value="Jharkhand">JHARKHAND</option>
            <option value="Karnataka">KARNATAKA</option>
            <option value="Kerala">KERALA</option>
            <option value="Madhya pradesh">MADHYA PRADESH</option>
            <option value="Maharashtra">MAHARASHTRA</option>
            <option value="Manipur">MANIPUR</option>
            <option value="Meghalaya">MEGHALAYA</option>
            <option value="Mizoram">MIZORAM</option>
            <option value="Nagaland">NAGALAND</option>
            <option value="Odisha">ODISHA</option>
            <option value="Punjab">PUNJAB</option>
            <option value="Rajasthan">RAJASTHAN</option>
            <option value="Sikkim">SIKKIM</option>
            <option value="Tamil nadu">TAMIL NADU</option>
            <option value="Telangana">TELANGANA</option>
            <option value="Tripura">TRIPURA</option>
            <option value="Uttar pradesh">UTTAR PRADESH</option>
            <option value="Uttarakhand">UTTARAKHAND</option>
            <option value="West bengal">WEST BENGAL</option>
            <option value="other">----------SELECT YOUR STATE-------------</option>
            </select></p>
        <p><input type="text" placeholder="Enter your Username" name="username" onChange={handleChange}/></p>
        <p><input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange}/></p>
        <p><button style={{borderRadius:"20px"}} onSubmit={handleSubmit}>Submit</button></p>
        <p id="output" style={{ color: messageColor }}>{message}</p>
        <p><a href="log" style={{textDecoration:"none"}}>Already have an account? Login</a></p>
        </form>
        </div>
        </>
    )
}