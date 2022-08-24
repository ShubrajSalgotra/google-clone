export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TREM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TREM:
            return{
                ...state,
                term: action.term,
            }
    
        default:
            return state;
    }
}


export default reducer;