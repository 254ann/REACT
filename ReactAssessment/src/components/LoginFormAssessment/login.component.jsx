import { useState } from 'react';
import { login } from "./utils";
import "./style.css";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError('');
    try {
      await login({ email, password });
      alert('Login successful!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const isLoginDisabled = !email || password.length < 6 || isLoggingIn;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input 
          id={"email"} 
          type={"email"} 
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input 
          id={"password"} 
          type={"password"}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {error && (
        <div className="errorMessage">
          {error}
        </div>
      )}
      <div className="button">
        <button onClick={handleLogin} disabled={isLoginDisabled}>Login</button>
      </div>
    </div>
  );
}
