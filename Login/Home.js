import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'
import Header from './Header';
import Button from '@mui/material/Button';


const Home = () => {
const [Items, setItems] = useState([]);

const ProductItems = async () => {
 
const res = await axios.get("https://fakestoreapi.com/products")
try {
   setItems(res.data)
   console.log(res.data)
} catch (error) {
  console.log(error)
 }
}

useEffect(() => {
ProductItems()
},[])

  return (
    <div>
    <Header />
     <div className='Card'>
         {Items.map((elem,index) => {
      return ( 
    <div key={index}>
      <Card className='cards'>
      <Card.Img variant="top" src={elem.image} className='Img'/>
      <Card.Body>
        <Card.Title className='title'>{elem.title}</Card.Title>
        <Card.Text style={{fontSize: 11,overflow:'hidden' }}>
        {elem.description}
        </Card.Text>
        <div className='price-btn'>
        <Card.Text style={{fontSize:18}}>$
        {elem.price}/=
        </Card.Text>
        <Button variant="contained" size="small" onClick={ProductItems}>Add Cart</Button>

        </div>
        </Card.Body>
    </Card>
     </div>
      )
      })}
      </div>
  </div>
  )
}


export default Home;


