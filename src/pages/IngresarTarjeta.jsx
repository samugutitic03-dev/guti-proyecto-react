import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function IngresarTarjeta() {
  const [titular, setTitular] = useState('');
  const [numero, setNumero] = useState('');
  const [vence, setVence] = useState('');
  const [cvv, setCvv] = useState('');
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeVisible(true);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Layout title="Agregar Tarjeta">
      <Link to="/metodo-actual" className="volver">
        ‹ Back
      </Link>

      <div className="perfil-container" style={{ maxWidth: '520px' }}>
        <h2>Registrar Nueva Tarjeta</h2>

        <form className="perfil-form" onSubmit={handleSubmit}>
          <label>Nombre del titular</label>
          <input
            type="text"
            placeholder="Nombre completo como figura en la tarjeta"
            value={titular}
            onChange={(e) => setTitular(e.target.value)}
            required
          />

          <label>Número de tarjeta</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />

          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <label>Vencimiento</label>
              <input
                type="text"
                placeholder="MM/AA"
                maxLength="5"
                value={vence}
                onChange={(e) => setVence(e.target.value)}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>CVV</label>
              <input
                type="password"
                placeholder="123"
                maxLength="4"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-auth" style={{ marginTop: '10px' }}>
            Guardar Tarjeta 💳
          </button>
        </form>

        {mensajeVisible && (
          <div className="pago-exitoso">
            ✅ ¡Tarjeta agregada exitosamente a tu cuenta!
          </div>
        )}
      </div>
    </Layout>
  );
}
