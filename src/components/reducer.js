const initialState = { 
    count: 0
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
                count: action.payload * 1 // *1 untuk increment berjalan dengan lancar
            }

        default:
            return state
    }
}