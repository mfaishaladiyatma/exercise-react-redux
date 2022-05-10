import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import React from 'react'
import { reductionAction, setCounterAction, setTodosAction } from "./action"

function Button2(props) {
  const todos = useSelector((state) => state.todos.todo)
  const dispatch = useDispatch()
  console.log(todos, '<<<TODOS')

    const [input, setInput] = useState('')
    const [inputTodos, setInputTodos] = useState('')
    const [arrTodos, setArrTodos] = useState([])
    const clicked = (e) => {
      e.preventDefault()
      dispatch(setCounterAction(input))
    }

    const clickedTodos = (e) => {
      e.preventDefault()
      dispatch(setTodosAction(inputTodos))
      setArrTodos([...arrTodos, inputTodos])
      setInputTodos("")
      console.log(todos, '<<<afterTODOS')
    }
  return (
      <>
    <button onClick={() => { dispatch(reductionAction) }}>reduction</button>
    <form action="">
        {/* <input onChange={(e) => (e.target.value)} type="text" value={props.value}/>
        <button onClick={ (e) => {e.preventDefault(); props.set(props.value)}}>SUBMIT</button>
        <p>{props.num}</p> */}
        <input onChange={(e) => setInput(e.target.value)} value={input} type="number" />
        <button onClick={ clicked }>SUBMIT</button>
    </form>
    <form action="">
        <input onChange={(e) => setInputTodos(e.target.value)} value={inputTodos} type="text" />
        <button onClick={ clickedTodos }>Todos</button>
    </form>
    <ol>
      {arrTodos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
    </>
  )
}



// const mapStateToProps = (state) => ({
//     num: state.num
//   })
  
//   const mapDispatchToProps = (dispatch, state) => ({
//     reductionCount: () => {dispatch(reductionAction)},
//     set: (num) => {dispatch(setCounterAction(num))},
//   })


export default (Button2)