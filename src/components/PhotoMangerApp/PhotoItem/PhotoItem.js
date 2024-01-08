import { useDispatch } from "react-redux";
import { deletedPhoto } from "../../../features/photos/slices/photosSlice";

export default function PhotoItem(props) {
    const { id, url } = props.item;
    const dispatch = useDispatch();

    const handleCliceDelete = () => {
        dispatch(deletedPhoto(id))
    }

    return (
        <div className="container-image">
            <img className="preview-image" src={url} alt="preview"></img>
            <span className="close" onClick={handleCliceDelete}>
                &#10006;
            </span>
        </div>
    )
}