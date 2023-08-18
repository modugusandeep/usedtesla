import "./index.css";

const ThumbnailItem = props => {
    const {imageDetails,isActive, setActiveThumbnailId} = props
    const {id,image} = imageDetails;
    const isActiveName = isActive ? "act": "no-act"; 

    const onClickThumbnail = () => {
        setActiveThumbnailId(id)
    }

    return(
        <li className="thumbnail-list-item">
        <button
          type="button"
          className="thumbnail-button"
          onClick={onClickThumbnail}
        >
          <img
            src={image}
            alt="setImage"
            className={isActiveName}
          />
        </button>
      </li>
    )


}
export default ThumbnailItem