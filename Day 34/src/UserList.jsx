function UserList() {
  const users = [
    { id: 1, name: "Ragul", role: "Student" },
    { id: 2, name: "Raghul", role: "Developer" },
    { id: 3, name: "Arun", role: "Designer" }
  ]

  return (
    <div>
      <h3>User List</h3>
      {users.map(user => (
        <p key={user.id}>
          {user.name} - {user.role}
        </p>
      ))}
    </div>
  )
}

export default UserList