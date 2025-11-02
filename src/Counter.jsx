import { useState } from "react"

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(value + 1);
  }

  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleClick}>Update: {value}</button>
    </div>
  )
}
