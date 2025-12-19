export function Register() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <h4>Let's create new account</h4>
      <form action="">
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username"  /><br />
        
        <label htmlFor="Email">Email:</label><br />
        <input type="email" id="email" /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" />

        <label htmlFor="confirmPass">Confirm Password:</label><br />
        <input type="password" id="confirmPass" />

        

      </form>
    </div>
  )
}