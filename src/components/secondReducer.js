const initialState = {
    todo: []
}

export default function secondReducer(state = initialState, action){
    switch (action.type){
        case 'setTodosAction':
            console.log(action.payload)
            return{
               todo: [...state.todo, action.payload ]
            }
        case 'reductionTodos':
            console.log(action.payload)
            console.log(state.todo)
            return{
                todo: state.todo.splice(action.payload, 2)
            }
        default:
            return state
    }
}