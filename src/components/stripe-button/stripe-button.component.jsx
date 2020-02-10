import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100 ;
    const publishableKey = "pk_test_b3wzlrLySLvVrQLHLsQvVTv400qO1UfwOQ";

    //it should be the paymentFunction that will be done and proccesed in backend!
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Crwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay NOW!'
            token={onToken}
            stripeKey={publishableKey}
        />
        //token is the thing that we pass !
    )

}

export default StripeCheckoutButton;