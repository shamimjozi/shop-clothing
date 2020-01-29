import React from 'react' ;
import {connect} from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const checkoutPage = ({cartItems, total}) =>(
    <div className='checkout-page' >
       <div className='checkout-header'>
           <div className='header-block'>
               <span>Product</span>
           </div>
           <div className='header-block'>
               <span>Description</span>
           </div>
           <div className='header-block'>
               <span>Quantity</span>
           </div>
           <div className='header-block'>
               <span>Price</span>
           </div>
           <div className='header-block'>
               <span>Remove</span>
           </div>
       </div>
     
      
      
       {
        
        cartItems.map(cartItem =>(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))
         
       }
        

           
       <div className='total'>
                 <span>TOTAL : ${total}</span>
       </div>
    </div>
);

const mapStateToProps  = ({ cart: {cartItems} }) => ({
    cartItems : cartItems,
    total: cartItems.reduce((accumalatedQuantity,cartItem) => 
    accumalatedQuantity + cartItem.quantity * cartItem.price ,0)
});

export default connect(mapStateToProps)(checkoutPage);


 /* {
          cartItems.map(cartItem =>(
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
      } */

     