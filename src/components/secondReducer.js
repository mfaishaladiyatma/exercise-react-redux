const initialState = {
    todo: []
}

export default function secondReducer(state = initialState, action){
    switch (action.type){
        case 'setTodosAction':
            return{
                ...state,
                todo: action.payload
            }
        default:
            return state
    }
}