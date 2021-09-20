function BurgersReducer (state= [],action) {
    switch(action.type){
        case "LOAD_PRODUCTS":
            let burgers = [...action.payload]
            state = burgers;
            return state 
        default:
            return state
    }
}


export default BurgersReducer