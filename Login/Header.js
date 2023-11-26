import React from 'react'
import Signout from './Signout';


const Header = () => {
 return (
    <div className='Header shopping-cart'>
      <div className='Heading'>Shopping Cart</div>
     <div>Cart
     <sup>{'0'}</sup>
     <Signout />       
       </div>
    </div>
  )
}



export default Header;