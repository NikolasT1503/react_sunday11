import React, { useCallback, useEffect, useState } from "react";

const Counter1 = () => {
    let [counter, setCounter] = useState(0);

    let [message, setMessage] = useState("Приветствую пользователей моего приложения")

    const greeting = useCallback((message)=>{
      console.log(message)
    },[]);

    useEffect(()=>{
      greeting(message);
    }, [greeting, message])

    return (
      <>
        <button onClick={() => setCounter(--counter)}>-</button>
        {counter}
        <button onClick={() => setCounter(++counter)}>+</button>

      </>
    );
  };
  
  export default Counter1;