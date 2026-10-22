import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navegar directamente a Inicio de la tienda
    navigate('/inicio');
  };

  return (
    <div className="auth-page-container">
      <div className="dropdown-menu-auth">
        <h2 className="auth-title">TURTLE INC</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="emailInput" className="auth-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control-auth"
              id="emailInput"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="passwordInput" className="auth-label">
              Password
            </label>
            <input
              type="password"
              className="form-control-auth"
              id="passwordInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check-auth">
            <input
              type="checkbox"
              id="dropdownCheck"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="dropdownCheck">Remember me</label>
          </div>

          <button type="submit" className="btn-auth">
            Sign in
          </button>
        </form>

        <div className="auth-divider"></div>

        <Link className="auth-link" to="/registro">
          New around here? Sign up
        </Link>
        <Link className="auth-link" to="/olvidaste-contrasena">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
