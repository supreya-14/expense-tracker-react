function Signup({ setShowSignup, setIsLoggedIn }) {
  return (
    <div className="login-container">

      <div className="signup-card">

        <h2>Create Account</h2>

        <p>Sign up to get started</p>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button
          className="login-btn"
          onClick={() => setIsLoggedIn(true)}
        >
          SIGN UP
        </button>

        <p className="signup-text">
          Already have an account?

          <span onClick={() => setShowSignup(false)}>
            {" "}Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Signup;