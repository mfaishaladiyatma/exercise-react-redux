import { useDispatch, useSelector } from "react-redux"
import { incrementAction } from "./components/action"
import Button2 from "./components/Button2";

function App(props) {
  const counter = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
    <div className="App">
      <p> counter: {counter} </p>
      <button onClick={() => { dispatch(incrementAction) }}>increment</button>
    </div>
    <Button2 />
    </>
  );
}



export default (App);
