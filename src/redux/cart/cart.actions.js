import CartActionTypes from './cart.types';

export const toggleCartHidden =() =>({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem =item =>({
    type: CartActionTypes.ADD_ITEM ,
    payload : item 
})

//this array get the items  , 
//type -> hey im adding item
//payload -> everything we want like here is the item that we want to add