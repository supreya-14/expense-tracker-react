function Login({ setIsLoggedIn, setShowSignup }) {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-icon">💰</div>

        <h2>Welcome Back!</h2>

        <p>Login to continue</p>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <div className="login-options">

          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <span>Forgot Password?</span>

        </div>

        <button
          className="login-btn"
          onClick={() => setIsLoggedIn(true)}
        >
          LOGIN
        </button>

        <p className="signup-text">
          Don't have an account?

          <span onClick={() => setShowSignup(true)}>
            {" "}Sign Up
          </span>

        </p>

      </div>

    </div>
  );
}

export default Login;