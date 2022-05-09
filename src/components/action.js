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

export {
    incrementAction, reductionAction, setCounterAction
}