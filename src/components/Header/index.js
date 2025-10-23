import './index.css'

import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
          <div className="headerCard1">
            <img
              className="websiteLogoImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />{' '}
          </div>
          <div className="headrCard2">
            <ul className="headerCard2">
              {' '}
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <button className="logoutButton" type="button">
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
