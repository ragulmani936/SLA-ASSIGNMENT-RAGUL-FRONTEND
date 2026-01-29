function TodoList() {
  const todos = ["Learn React", "Practice Hooks", "Build Projects"]

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList