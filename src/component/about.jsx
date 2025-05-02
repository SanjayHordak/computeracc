import React from "react";
import img6 from '../assets/about.avif'
export default function Aboutcom(){
    return(
        <>
        <div style={{backgroundColor:"black"}}>
        <h1 style={{fontWeight:"bolder",textAlign:"center",color:"white",marginBottom:"40px",marginTop:"40px"}}>ABOUT US</h1>
        <table>
            <tr>
                <td style={{width:"40%"}}>
        <div style={{display:"flex",alignContent:"flex-start",justifyContent:"center",gap:"40px",padding:"0 40px",flexWrap:"wrap"}}>
        <img src={img6} alt="" />
        </div>
        </td>
        <div>
            <td>
        <h4 style={{fontWeight:"lighter", color:"white",justifyContent:"center",}}>At TechGiants, we're passionate about powering your digital world. As a premier eCommerce destination for the latest in technology, we bring together cutting-edge gadgets, innovative electronics, and essential tech accessories—all in one place. Whether you're a tech enthusiast, a gamer, a professional, or someone simply looking for smart solutions, we've got you covered.

Founded with the mission to make top-tier technology accessible and affordable, TechGiants partners with trusted brands and emerging innovators to deliver products that enhance everyday life. From smartphones and laptops to smart home devices and wearables, we curate only the best for our customers.

But we’re more than just a tech store. Our team of experts is dedicated to providing exceptional service, fast shipping, and reliable support every step of the way. With a seamless shopping experience and a community-driven approach, TechGiants is here to help you stay ahead in a fast-moving digital age.<br/>
<h3 style={{fontWeight:"bold", fontSize:"30px", marginTop:"20px", color:"cyan", opacity:"50%"}}> 
"TechGiants – Where technology meets trust."
</h3>
</h4>
</td>
</div>
</tr>
</table>
</div>
        </>
    )
}