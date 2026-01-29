function LoginStatus() {
  const isLoggedIn = true

  return (
    <h2>
      {isLoggedIn ? "Logged In" : "Logged Out"}
    </h2>
  )
}

export default LoginStatus