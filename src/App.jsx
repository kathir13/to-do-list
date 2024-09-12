import { useState, useEffect } from "react"
import Todoinput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTOdos] = useState([])
  const [todovalue, settodovalue] = useState('')

  function persist(newlist) {
    localStorage.setItem('todos', JSON.stringify({ todos : newlist}))
  }

  function addtool(newtodo) {
    const newtodolist = [...todos, newtodo]
    persist(newtodolist)
    setTOdos(newtodolist)
  }

  function deletetool(index) {
    const newtodolist = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persist(newtodolist)
    setTOdos(newtodolist)
  }

  function edittool(index) {
    const valuetodoedit = todos[index]
    settodovalue(valuetodoedit)
    deletetool(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localtodos = localStorage.getItem('todos')
    if (!localtodos) {
      return
    }
    localtodos = JSON.parse(localtodos).todos
    setTOdos(localtodos)
  }, [])

  return (
    <>
      <Todoinput addtool={addtool} deletetool={deletetool}
        todovalue={todovalue} settodovalue={settodovalue} />
      <TodoList edittool={edittool} deletetool={deletetool} todos={todos} />
    </>
  )

}

export default App
