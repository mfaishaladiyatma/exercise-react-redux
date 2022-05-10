import { combineReducers, createStore } from "redux"
import counterReducer from "./reducer"
import secondReducer from "./secondReducer"

const store = createStore(combineReducers({
    counter: counterReducer,
    todos: secondReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.dispatch({type: 'increment-count'})

// store.dispatch({type: 'setCounterAction'})
console.log(store.getState())

export default store