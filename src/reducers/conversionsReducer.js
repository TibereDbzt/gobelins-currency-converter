const stateInit = {
    history: [],
};

const conversionsReducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case "ADD_CONVERSION":
            const { amount, result, toSymbol } = action.payload;

            return {
                ...state,
                history: [...state.history, {
                    amount,
                    result,
                    toSymbol
                }]
            };

        case "EMPTY_HISTORY":

            return {
                ...state,
                history: []
            };

        default:
            return state;
    }

};

export default conversionsReducer;
