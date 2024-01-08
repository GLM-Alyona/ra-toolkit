import { useDispatch } from "react-redux";
import { promiseData } from "../../../features/photos/thunks/dataUrl";


export default function InputPhoto() {
    const dispatch = useDispatch()
      
    const handleSelect = async (evt) => {
        const files = [...evt.target.files];
        evt.target.files = null;
        
        dispatch(promiseData(files))
    };

    return (
        <div className="input-photo-container">
            <input className="input-file" type="file" multiple onChange={handleSelect}></input>
            <span className="imposed-on-input">Click to select</span>
        </div>
    )
}