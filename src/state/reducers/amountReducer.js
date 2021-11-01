export default reducer = (state = 0, action) => {
    if(action.type == 'deposit'){
        return state + action.paylaod
    }    
    if(action.type == 'withdraw'){
        return state - action.paylaod
    }    
    else { 
        return state
    }
} 