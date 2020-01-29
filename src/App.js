import React from 'react';
import './App.css';

import {Switch , Route , Redirect} from 'react-router-dom' ;
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component'
import checkoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component' ;
import {auth ,createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {

  

  unsubscribeFromAuth = null ;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
      //for saving the user in our app :
       userRef.onSnapshot(snapShot =>{
       setCurrentUser({
            id : snapShot.id ,
            ...snapShot.data()
        })
       }); 
     }

     else{
      setCurrentUser(userAuth);
     }
     
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={checkoutPage} />
            <Route 
              exact
              path='/signin'
              render={()=>
                this.props.currentUser?(
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              } />
        </Switch>
         
       </div>
    );
  }

};

//for dont allow to user who sign in to do mess or access to the code we need Redirect in react Dom and current user with below function :
//and also we should change the Route for Sign in and after sigin in redirect us to home page
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
});

const mapDispatchToProps = dispatch =>({
    setCurrentUser:user=> dispatch(setCurrentUser(user))
})
//whatever u pass me , i'll get the reducer as an action that pass to reducers 

export default connect(mapStateToProps,mapDispatchToProps)(App);

//first argument : mapstate to props but app doesn't need current user itself to do sth on it
//second :dispatch(for action)
//=>so we don't nees constructore any more