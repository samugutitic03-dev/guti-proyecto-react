import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistroUsuario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fecha: '',
    password: '',
    confirmar: '',
    terminos: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmar) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    // Guardar usuario mock en localStorage
    localStorage.setItem('turtleUser', JSON.stringify({
      nombre: formData.nombre + ' ' + formData.apellido,
      correo: formData.correo
    }));
    navigate('/inicio');
  };

  return (
    <div className="auth-page-container">
      <div className="registro-card">
        <h1>Crear cuenta</h1>
        <p className="subtitulo">Regístrate en Turtle Inc.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="auth-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control-auth"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="apellido" className="auth-label">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="form-control-auth"
            placeholder="Ingresa tu apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />

          <label htmlFor="correo" className="auth-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            className="form-control-auth"
            placeholder="correo@ejemplo.com"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefono" className="auth-label">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="form-control-auth"
            placeholder="Ingresa tu teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <label htmlFor="fecha" className="auth-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            className="form-control-auth"
            value={formData.fecha}
            onChange={handleChange}
            required
          />

          <label htmlFor="password" className="auth-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control-auth"
            placeholder="Crea una contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmar" className="auth-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="confirmar"
            name="confirmar"
            className="form-control-auth"
            placeholder="Repite tu contraseña"
            value={formData.confirmar}
            onChange={handleChange}
            required
          />

          <div className="terminos">
            <input
              type="checkbox"
              id="terminos"
              name="terminos"
              checked={formData.terminos}
              onChange={handleChange}
              required
            />
            <label htmlFor="terminos">Acepto los términos y condiciones</label>
          </div>

          <button type="submit" className="btn-auth">
            Registrarme
          </button>
        </form>

        <p className="login-prompt">
          ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}
