import { REQUEST_CONVERT} from "../constants/fixer-api";
import { addConversion } from "../actions/actions-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CURRENT_DATE = new Date();

const Converter = (props) => {

    const dispatch = useDispatch();
    const currencies = props.currencies;

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState(10);
    const [date, setDate] = useState(CURRENT_DATE.toISOString().slice(0, 10));
    const [precision, setPrecision] = useState(1);
    const [toSymbol, setToSymbol] = useState('USD');
    const [result, setResult] = useState(null);

    const convert = () => {
        if (!amount || isNaN(amount)) return;
        setIsLoading(true);
        const loadConversion = async () => {
            const resp = await fetch(REQUEST_CONVERT(date, toSymbol));
            return resp.json();
        };
        loadConversion()
            .then(conversion => {
                setIsLoading(false);
                setResult(Math.round(amount * Object.values(conversion.rates)[0] * Math.pow(10, precision)) / Math.pow(10, precision))
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        if (!result) return;
        dispatch(addConversion({
            amount,
            result,
            toSymbol,
        }))
    }, [result]);

    return (
        <div>
            <h3>Convert euros to another currency</h3>
            <label>
                Amount
                <input name={"amount"} type="number" min={0} value={amount.toString()} onChange={e => setAmount(parseInt(e.target.value, 10))}/>
            </label>
            <label>
                Precision
                <input name="precision" type="number" min={0} max={5} step={1} value={precision} onChange={e => setPrecision(parseInt(e.target.value, 10))}/>
            </label>
            <label>
                Date
                <select name="date" value={date} onChange={e => setDate(e.target.value)}>
                    { [...new Array(10)].map((_, i) => {
                        const date = new Date(CURRENT_DATE);
                        date.setFullYear(CURRENT_DATE.getFullYear() - i);
                        return <option key={i} value={date.toISOString().slice(0, 10)}>{date.toISOString().slice(0, 10)}</option>
                    }) }
                </select>
            </label>
            <label>
                To currency
                <select name="toCurrency" value={toSymbol} onChange={e => setToSymbol(e.target.value)}>
                    { Object.entries(currencies).map((currency, i) => <option key={i} value={currency[0]}>{currency[1]}</option>) }
                </select>
            </label>
            <button className="cta" onClick={convert}>Convert</button>
            { isLoading
                ? <p>loading...</p>
                : result && <div className="result">==> {result} {toSymbol}</div>
            }
        </div>
    )
}

export default Converter;
