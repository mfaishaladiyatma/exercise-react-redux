import { connect } from "react-redux"
import { useState } from 'react'
import React from 'react'
import { reductionAction, setCounterAction } from "./action"

function Button2(props) {
    const [input, setInput] = useState('')
    const clicked = (e) => {
      e.preventDefault()
      props.set(input)
    }
  return (
      <>
    <button onClick={() => { props.reductionCount() }}>reduction</button>
    <form action="">
        {/* <input onChange={(e) => (e.target.value)} type="text" value={props.value}/>
        <button onClick={ (e) => {e.preventDefault(); props.set(props.value)}}>SUBMIT</button>
        <p>{props.num}</p> */}
        <input onChange={(e) => setInput(e.target.value)} value={input} type="number" />
        <button onClick={ clicked }>SUBMIT</button>
        <p>{props.num}</p>
    </form>
    </>
  )
}



const mapStateToProps = (state) => ({
    num: state.num
  })
  
  const mapDispatchToProps = (dispatch, state) => ({
    reductionCount: () => {dispatch(reductionAction)},
    set: (num) => {dispatch(setCounterAction(num))},
  })


export default connect(mapStateToProps, mapDispatchToProps)(Button2)