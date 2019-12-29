import React from 'react';
import {Link} from 'react-router-dom' ;

import {connect} from 'react-redux' ;
// let us to access the things that realted to redux

import { auth } from '../../firebase/firebase.utils.js';
import {ReactComponent as Logo } from '../../assets/crown.svg' ;
import './header.styles.scss';

const Header = ({currentUser }) =>(
    <div className="header">
        <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()} >
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin' >
                    SIGN IN
                </Link>
            )

            }
        </div>
    </div>
);

const mapStateToProps = state =>({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header) ;

//with this 4 code lines we can ommit the passing current user in app.js to HEADER