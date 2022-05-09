import { createStore } from "redux"
import counterReducer from "./reducer"

const store = createStore(counterReducer)
store.dispatch({type: 'increment-count'})
store.dispatch({type: 'setCounterAction'})
console.log(store.getState())

export default store