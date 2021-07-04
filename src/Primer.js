import React from 'react';

const users = [{name: "Николай"}, {name: "Артем"}, {name: "Николай"}];

const ItemUser = (props) => {
    return <li>{props.name}</li>
}

const Primer = () => {
    return(
        <>
            <ul>
            {users.map((item,index)=>(
                <ItemUser name={item.name} key={index}/>
            ))}
            </ul>
        </>
    )
} 

export default Primer;