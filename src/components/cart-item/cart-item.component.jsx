import React from 'react' ;

import './cart-item.styles.scss';

const CartItem = ({item:{imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div>
            <span className='item-details'>{name}</span>
            <span className='item-details'>
                {quantity} * ${price}
            </span>
        </div>
    </div>
);

export default CartItem ;