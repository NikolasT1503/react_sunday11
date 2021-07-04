import React, { useState } from "react";

function createUser(name, surname){
    const u = {name, surname};

    console.log(u)
    return u
}

const Counter = () => {
    const [counter, setCounter] = useState(0);
      /* const myReducerWithConst = useMyReducer(); */
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    /* const user = { name, surname }; */

    const user = React.useMemo(()=> createUser(name, surname), [name, surname]);    
    //выполняется только в случае, если были изменения в полях name, surname, второй параметр означает отслеживание полей в области памяти (мемоизируются)

    /* const user = createUser(name, surname); */   //в

    return (
      <>
        <button onClick={() => setCounter(counter-1)}>-</button>
        {counter}
        <button onClick={() => setCounter(counter+1)}>+</button>
        <br/>
        <input type="text" value={name} onChange={(e) => {
            setName(e.target.value);
            console.log(user)}} />
        <br/>
        <input type="text" value={surname} onChange={(e) => {
            setSurname(e.target.value);
            console.log(user)
        }} />
      </>
    );
  };
  
  export default Counter;