export const LOAD_PRODUCTS = (payload) =>{
    return {
        type: "LOAD_PRODUCTS",
        payload:payload
    }
}




export const SEARCH_INPUT = (text) => {
    return {
        type: "SEACRH_INPUT",
        payload:text
    }
}





export const SEARCH = (text) => {
    return {
        type: "SEACRH",
        payload:text
    }
}





export const CATEGORY = (category) => {
    return {
        type: "CATEGORY",
        payload:category
    }
}