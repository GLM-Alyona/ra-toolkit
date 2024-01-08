import { useSelector } from "react-redux"
import PhotoItem from "../PhotoItem/PhotoItem"

export default function PhotoContainer() {
    const { photos } = useSelector(state => state.photos)

    return (
        <div className="preview-container">
            <div className="preview-container-left">{photos.slice(photos.length - 1, photos.length).map(item => <PhotoItem key={item.id} item={item} />)}</div>
            <div className="preview-container-rigth">{photos.slice(0, photos.length - 1).map(item => <PhotoItem key={item.id} item={item} />)}</div>
        </div>
    )
}