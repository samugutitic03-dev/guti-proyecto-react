import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OlvidasteContrasena() {
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const navigate = useNavigate();

  const handleEnviarCodigo = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Ingresa tu correo electrónico.');
      return;
    }
    setCodigoEnviado(true);
    alert('Código de recuperación enviado a ' + email);
  };

  const handleCambiarContrasena = (e) => {
    e.preventDefault();
    navigate('/nueva-contrasena');
  };

  return (
    <div className="auth-page-container">
      <div className="dropdown-menu-auth">
        <h2 className="auth-title">Recuperar Contraseña</h2>
        <form onSubmit={handleCambiarContrasena}>
          <div>
            <label className="auth-label">Email</label>
            <input
              type="email"
              className="form-control-auth"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="btn-auth"
            style={{ marginBottom: '15px' }}
            onClick={handleEnviarCodigo}
          >
            {codigoEnviado ? 'Código Enviado ✅' : 'Enviar código'}
          </button>

          <div>
            <label className="auth-label">Código</label>
            <input
              type="text"
              className="form-control-auth"
              placeholder="Código de verificación"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-auth">
            Continuar
          </button>
        </form>

        <div className="auth-divider"></div>

        <Link className="auth-link" to="/">
          ← Volver a inicio de sesión
        </Link>
      </div>
    </div>
  );
}
