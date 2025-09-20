import { useState } from "react";

// --- Login Form Component ---
const LoginForm = ({ onToggle }) => {
  return (
    <div className="auth-container">
      <h2>Welcome Back! 😊</h2>
      <form>
        <div className="input-group">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" id="username" autoComplete="off" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-group">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" id="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <div className="options-group">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="auth-button">
          Login
        </button>
        <div className="toggle-link">
          Don't have an account? <span onClick={onToggle}>Register</span>
        </div>
      </form>
    </div>
  );
};

// --- Registration Form Component ---
const RegistrationForm = ({ onToggle }) => {
  return (
    <div className="auth-container">
      <h2>Register Today!</h2>
      <form>
        <div className="input-group">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" id="username" autoComplete="off" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-group">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" id="Email" autoComplete="new-email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" id="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="auth-button">
          Register
        </button>
        <div className="toggle-link">
          Already have an account? <span onClick={onToggle}>Login</span>
        </div>
      </form>
    </div>
  );
};

// --- Main Auth Page Component ---
function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="auth-page">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>

      {isLoginView ? (
        <LoginForm onToggle={toggleView} />
      ) : (
        <RegistrationForm onToggle={toggleView} />
      )}
    </div>
  );
}

export default AuthPage;
