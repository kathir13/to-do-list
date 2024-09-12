import { useState } from "react"

export default function Todoinput(props){
    const {addtool, todovalue, settodovalue} = props
    return (
        <header>
            <input value={todovalue} onChange={(e) => {
                settodovalue(e.target.value)
            }}placeholder="Enter todo....."/>
            <button onClick={() =>{
                addtool(todovalue)
                settodovalue('')
            }}>Add</button>
        </header>
    )
}