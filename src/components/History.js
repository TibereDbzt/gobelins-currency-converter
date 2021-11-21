import { useDispatch, useSelector } from "react-redux";
import { emptyHistory } from "../actions/actions-types";

const History = () => {

    const dispatch = useDispatch();
    const { history: conversions } = useSelector(state => state);

    return (
        <div>
            <h3>Conversion history</h3>
            { conversions.length > 0 && <button className="cta danger" onClick={() => dispatch(emptyHistory())}>Vider</button> }
            <ul>
                { conversions.map((conversion, i) => <li key={i}>{conversion.amount} EUR --> {conversion.result} {conversion.toSymbol}</li>) }
            </ul>
        </div>
    )

};

export default History;
