// Write your code here.
import './index.css'

const EachThumbnailItem = props => {
  const {eachThumbnailDetails, onClickImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = eachThumbnailDetails

  const changingState = () => {
    onClickImage(eachThumbnailDetails)
  }
  const cssProperty = isActive ? 'opacity-img' : ''
  console.log(isActive)
  return (
    <li className="each-thumbnail-container">
      <button type="submit" className="btn-elem">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`each-thumbnail-img ${cssProperty}`}
          onClick={changingState}
        />
      </button>
    </li>
  )
}

export default EachThumbnailItem
