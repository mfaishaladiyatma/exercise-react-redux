import { connect } from "react-redux"
import React from 'react'
import { reductionAction } from "./action"

function Button2(props) {
  return (
    <button onClick={() => { props.reductionCount() }}>reduction</button>
  )
}

const mapStateToProps = (state) => ({
    count: state.count
  })
  
  const mapDispatchToProps = (dispatch, state) => ({
    reductionCount: () => {dispatch(reductionAction)}
  })

export default connect(mapStateToProps, mapDispatchToProps)(Button2)