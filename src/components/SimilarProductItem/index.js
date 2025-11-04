import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {imageUrl, rating, price, brand} = productDetails
  return (
    <li className="similarProductListItem">
      <img className="similarProductImg" src={imageUrl} alt="similar product" />
      <p className="titleSimilar">{productDetails.title}</p>
      <p className="similarbrand">by {brand} </p>
      <div className="priceContainer">
        {' '}
        <p className="priceSimilar">Rs {price}/-</p>
        <div className="ratingStarCard1">
          {' '}
          <img
            alt="star"
            className="starImg"
            src="https://assets.ccbp.in/frontend/react-js/star-img.png "
          />
          <p className="ratingSimilar">{rating} </p>
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
