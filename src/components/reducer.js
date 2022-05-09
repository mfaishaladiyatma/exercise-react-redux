const initialState = { 
    count: 0,
    num: ''
}

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case 'increment-count' :
            return {
                ...state,
                count: state.count + 1
            }
        case 'reduction-count' :
            return {
                ...state,
                count: state.count - 1
            }
        case 'setCounterAction':
            return {
                ...state,
                num: action.payload
            }

        default:
            return state
    }
}