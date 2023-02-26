import {Button} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement} from "./counterAction"

function CounterApp() {
    const dispatch = useDispatch();
    const count = useSelector((count) => count)

  return (
    <div className="App">
      <h1 style={{borderBottom : "1px solid"}}>hello, I am Jarvis</h1>
      <div style={{padding : "2rem"}}>
        <h1>Counter : {count}</h1>
        <Button onClick={() => dispatch(increment())} style={{marginRight : "2rem"}}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  )
}

export default CounterApp;