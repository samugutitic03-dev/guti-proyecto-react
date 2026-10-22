import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Perfil() {
  const [nombre, setNombre] = useState(() => {
    try {
      const user = localStorage.getItem('turtleUser');
      if (user) {
        const parsed = JSON.parse(user);
        if (parsed.nombre) return parsed.nombre;
      }
    } catch {
      // ignore
    }
    return 'Santiago Osorno';
  });

  const [correo, setCorreo] = useState(() => {
    try {
      const user = localStorage.getItem('turtleUser');
      if (user) {
        const parsed = JSON.parse(user);
        if (parsed.correo) return parsed.correo;
      }
    } catch {
      // ignore
    }
    return 'santiago@example.com';
  });

  return (
    <Layout title="Perfil de Usuario">
      <main className="perfil-container">
        <h2>Información del Usuario</h2>

        <img
          className="avatar"
          src="https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
          alt="Avatar del usuario"
          width="120"
          height="120"
        />

        <form className="perfil-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </form>

        <div className="botones-perfil">
          <Link to="/metodo-actual">
            Método de pago actual
          </Link>
          <Link to="/eliminar-metodo">
            Eliminar método de pago
          </Link>
          <Link to="/verificar">
            Verificar método de pago
          </Link>
          <Link to="/" style={{ background: '#c62828' }}>
            Cerrar sesión
          </Link>
        </div>
      </main>
    </Layout>
  );
}
