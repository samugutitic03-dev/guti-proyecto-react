import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function CaparazonesCanje() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <Layout title="Canjear Caparazones">
      <Link to="/caparazones" className="volver">
        ‹ Back
      </Link>

      <div className="contenedor-caparazones" style={{ marginTop: '10px' }}>
        <div className="card-caparazones" style={{ maxWidth: '550px' }}>
          <h2>Canje de Puntos Tortuga</h2>
          <p>
            Tienes actualmente <strong>450 Caparazones</strong> disponibles para canjear por cupones de descuento directo en tu carrito.
          </p>

          <div className="recompensa-item">
            <span>Bono 25% OFF</span>
            <button
              className="btn-aceptar"
              style={{ padding: '6px 16px', fontSize: '14px' }}
              onClick={() => setModalAbierto(true)}
            >
              Canjear 100
            </button>
          </div>

          <div className="recompensa-item">
            <span>Bono 50% OFF</span>
            <button
              className="btn-aceptar"
              style={{ padding: '6px 16px', fontSize: '14px' }}
              onClick={() => setModalAbierto(true)}
            >
              Canjear 200
            </button>
          </div>

          <div className="recompensa-item">
            <span>Bono 75% OFF</span>
            <button
              className="btn-aceptar"
              style={{ padding: '6px 16px', fontSize: '14px' }}
              onClick={() => setModalAbierto(true)}
            >
              Canjear 350
            </button>
          </div>
        </div>
      </div>

      {modalAbierto && (
        <div className="modal-canje-overlay" onClick={() => setModalAbierto(false)}>
          <div className="modal-canje-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icono">🐢✨</div>
            <span className="modal-subtitulo">TURTLE INC</span>
            <h2 className="modal-titulo">¡Caparazones canjeados!</h2>
            <p className="modal-texto">
              Tus caparazones han sido canjeados con éxito y el descuento se aplicará en tu siguiente compra.<br />
              <strong>Turtle Inc 🐢</strong>
            </p>
            <button className="btn-aceptar" onClick={() => setModalAbierto(false)}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
