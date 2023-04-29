import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbakHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (value) => {
        setCounter((c)=>c+value) 
      },
      [],
    )
    

    // const increment = () => {
    //     setCounter(counter+1)
    // }
  return (
    <>
        <h1>UseCallBack Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={increment} />
    </>
  )
}
