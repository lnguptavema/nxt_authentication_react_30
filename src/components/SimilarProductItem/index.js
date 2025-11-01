import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {
    title,
    price,
    brand,
    totalReviews,
    availabilit,
    id,
    imageUrl,
    rating,
  } = productDetails
  return (
    <li className="similarProductListItem">
      <img className="similarProductImg" src={imageUrl} alt="similar product" />
      <p>{productDetails.title}</p>
      <p>by {brand} </p>
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
          <p>{rating} </p>
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
