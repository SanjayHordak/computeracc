/* eslint-disable no-empty */
import React from "react";
import  { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
export default function FetchApi(){
    const  [product, setProduct]= useState([])
    const [search,setSearch]=useState("")
useEffect(()=>{{}
const fetchData=async()=>{
    const response=await fetch("https://dummyjson.com/products/search?q=phone")
        const data=await response.json()
        console.log("phone",data.products)
        setProduct(data.products)
}
fetchData()
},[])

const handleSearch=(e)=>{
  setSearch(e.target.value)
}
console.log(search)
console.log('data:',product)
const filteredproducts=product.filter((item)=>{
 return item.title.toLowerCase().includes(search.toLowerCase())
})
console.log(filteredproducts)
return(
    <>
    <div style={{backgroundColor:"black",marginTop:"40px"}}>
    <h1 style={{textAlign:"center", fontWeight:"bolder", fontSize:"60px",color:"whitesmoke"}}>Products</h1>
    <Form.Control size="lg" type="text" placeholder="Large text" onChange={handleSearch}/>
    <Container className='mt-5'>
    <Row>
    {filteredproducts.map((item)=>{
        return(
            <Col>
            <Card style={{ width: '18rem' }}key={item.id}>
      <Card.Img variant="top" src={item.images} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    </Col>
        )
    })}
    </Row>
    </Container>
    </div>
    </>
)
}