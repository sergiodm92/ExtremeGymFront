const initialState = {
    x:""
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case "LOGIN_STATE":
            return {
            ...state,
            x: action.payload,
            }
            default:
        return state;
    }
}

export default rootReducer;