const incrementAction = {
    type: 'increment-count',
}
const reductionAction = {
    type: 'reduction-count',
}
const setCounterAction = (num) =>({
    type: 'setCounterAction',
    payload: num
})
const setTodosAction = (data) => ({
    type: 'setTodosAction',
    payload: data
})
const reductionTodos = (id) => ({
    type: 'reductionTodos',
    payload: id
})
export {
    incrementAction, reductionAction, setCounterAction, setTodosAction, reductionTodos
}