import { connect } from "react-redux"
import { incrementAction } from "./components/action"
import Button2 from "./components/Button2";

function App(props) {
  return (
    <>
    <div className="App">
      <p> counter: {props.count} </p>
      <button onClick={() => { props.incrementCount() }}>increment</button>
    </div>
    <Button2 />
    </>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch, state) => ({
  incrementCount: () => {dispatch(incrementAction)}
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
