import './index.css'

import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="homeContainer">
      <div>
        <h1 className="homeHeading">Clothes That Get YOU Noticed</h1>
        <p className="homeParagraph">
          Fashion is part of the daily air and it does it not quite that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are .So, celebrate the seasons new and exciting fashion
          in your own way.{' '}
        </p>
        <button type="button" className="shopButton">
          Shop Now
        </button>
      </div>
      <div>
        <img
          className="homeImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
