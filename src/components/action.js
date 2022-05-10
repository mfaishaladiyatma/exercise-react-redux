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

export {
    incrementAction, reductionAction, setCounterAction, setTodosAction
}