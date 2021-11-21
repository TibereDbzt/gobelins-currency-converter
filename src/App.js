import Converter from "./components/Converter";
import History from "./components/History";
import { useState } from "react";
import { REQUEST_SYMBOLS } from "./constants/fixer-api";

const App = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [currencies, setCurrencies] = useState({});

    const loadCurrencies =() => {
        setIsLoading(true);
        const loadSymbols = async () => {
            const resp = await fetch(REQUEST_SYMBOLS);
            return resp.json();
        };
        loadSymbols()
            .then(resp => {
                if (resp.success && resp.symbols) setCurrencies(resp.symbols);
                else setErrorMessage(resp.error.info);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="app">
            { errorMessage || (!isLoading && Object.values(currencies).length === 0)
                ? <div>
                    <h1>Currencies converter</h1>
                    <button className="cta" onClick={loadCurrencies}>Start convert</button>
                    <p>{errorMessage}</p>
                </div>
                : isLoading
                    ? <p>loading...</p>
                    : <>
                        <Converter currencies={currencies} />
                        <History />
                      </>
            }
        </div>
    )

}

export default App;
