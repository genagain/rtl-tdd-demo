function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="text"/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password"/>
        <label htmlFor="password-confirmation">Confirm Password</label>
        <input id="password-confirmation" type="password"/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
