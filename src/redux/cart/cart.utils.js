//Utility functions allow us to keep our files clean and organize functions
//that we may need in multiple files in one location.


//we want to see the new item is already in cart or not
//find() will return you the first item found based on the condition which pass in -> ()
export const addItemsToCart =(cartItems, cartItemToAdd) => {
       const existingCartItem = cartItems.find(
           cartItem => cartItem.id === cartItemToAdd.id
       );
       
       //if find the item in cartItems
       if(existingCartItem) {
           return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
            );
       }

       //if it is new in CartItems
       return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart = (cartItems,cartItemToRemove) =>{
        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToRemove.id
        )

        if(existingCartItem.quantity === 1){
            return cartItems.filter(cartItem =>cartItem.id !== cartItemToRemove.id)
        }

        return cartItems.map(
            cartItem => cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
}

//at first we check that it is exist or not and then if it is one we should clear it otherwise decrese the quantity