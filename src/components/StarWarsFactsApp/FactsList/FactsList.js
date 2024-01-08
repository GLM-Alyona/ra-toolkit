import ListItem from "../ListItem/ListItem";
import { useSelector } from "react-redux"

export default function FactsList() {
    const { requestedFacts } = useSelector(state => state.facts);
    return (
        <ul className="facts-list">
            {requestedFacts.map((item, index) => <ListItem key={index} item={item}/>)}
        </ul>
    )
}