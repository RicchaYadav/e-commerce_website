// NAVBAR CODE

import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
  const [{ basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if( user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
      <a href=""><b>YourShop</b></a>
      </Link>
        

        <div className="header_search">
            <input type="text" className="header_searchInput" />
            {/* logo */}
            <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
          <Link to='/login'>
          <div onClick={handleAuthentication} className="header_option ">
            <span className="header_optionOne">
              Hello {!user? 'Guest': user.email}
            </span>
            <span className="header_optionTwo">{user ?
              'Sign Out': 'Sign In'}
            </span>
          </div>
          </Link>
          <div className="header_option option">
          <span className="header_optionOne">
             Return
            </span>
            <span className="header_optionTwo">
              Order
            </span>
          </div>
          <div className="header_option option">
            <span className="header_optionOne">
              Your
            </span>
            <span className="header_optionTwo">
              Order
            </span>
          </div>

          <Link to='/checkout'>
            <div className="header_optionBasket">
              <ShoppingBasketIcon/>
              <span className="headeroptionTwo 
              header_basketCount">{basket?.length}</span>
            </div>
          </Link>
          

        </div>

    </div>


  )
}

export default Header