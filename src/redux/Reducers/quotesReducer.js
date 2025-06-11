const defaultstate = {
    author: "",
    quotes: ""
}


const quotesReducer = (state = defaultstate, action) => {
    switch (action.type) {
        case "CHANGE QUOTES": {
            return { quotes: action.payload.quote, author: action.payload.author }
        }
        default:
            return state;
    }
}

export default quotesReducer