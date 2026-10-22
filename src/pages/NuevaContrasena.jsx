import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NuevaContrasena() {
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmar) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    alert('Contraseña actualizada con éxito.');
    navigate('/inicio');
  };

  return (
    <div className="auth-page-container">
      <div className="dropdown-menu-auth">
        <h2 className="auth-title">Nueva Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="auth-label">Nueva contraseña</label>
            <input
              type="password"
              className="form-control-auth"
              placeholder="Nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="auth-label">Confirmar contraseña</label>
            <input
              type="password"
              className="form-control-auth"
              placeholder="Confirmar contraseña"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-auth">
            Cambiar contraseña
          </button>
        </form>

        <div className="auth-divider"></div>

        <Link className="auth-link" to="/">
          ← Volver al login
        </Link>
      </div>
    </div>
  );
}
