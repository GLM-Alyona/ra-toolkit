import InputPhoto from "../InputPhoto/InputPhoto";
import PhotoContainer from "../PhotoContainer/PhotoContainer";

export default function PhotoManager() {
    return (
        <div className="photo-manager">
            <h1 className="photo-manager-title">Photo Manager</h1>
            <InputPhoto />
            <PhotoContainer />
        </div>
    )
}