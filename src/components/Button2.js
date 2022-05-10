import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import React from 'react'
import { reductionAction, reductionTodos, setCounterAction, setTodosAction } from "./action"

function Button2(props) {
  const todos = useSelector((state) => state.todos.todo)
  const dispatch = useDispatch()
  // console.log(todos, '<<<TODOS')

    const [input, setInput] = useState('')
    const [inputTodos, setInputTodos] = useState('')
    const clicked = (e) => {
      e.preventDefault()
      dispatch(setCounterAction(input))
    }

    const clickedTodos = (e) => {
      e.preventDefault()
      dispatch(setTodosAction(inputTodos))
      setInputTodos("")
      console.log(todos, '<<<afterTODOS')
    }

    // const clickedRemoveTodos = (e) => {
    //   e.preventDefault()
    //   dispatch(reductionTodos)
    //   setInputTodos("")
    // }
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
      {todos.map((item, index) => (
        <React.Fragment key={index}>
        <li>
          <div >{item}</div>
          <button onClick={ () =>  (dispatch(reductionTodos(index))) }>X</button>
        </li>
        </React.Fragment>
      ))}
    </ol>
    {/* <ol>
      {arrTodos.forEach((data, index, array) => {
        <li key={index}>{array}</li>
      })}
    </ol> */}
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