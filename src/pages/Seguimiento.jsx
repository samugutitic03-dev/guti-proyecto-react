import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useOrder } from '../context/OrderContext';

export default function Seguimiento() {
  const { orderData, orderArrived, markAsArrived, clearOrder } = useOrder();
  const [modalFinal, setModalFinal] = useState(false);
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));
  const navigate = useNavigate();

  const direccion = orderData?.direccion || 'Cra 82 # 9A Sur 79, Medellín';

  const handleLlegoClick = () => {
    markAsArrived();
    setModalFinal(true);
  };

  const handleAceptarFinal = () => {
    clearOrder();
    setModalFinal(false);
    navigate('/inicio');
  };

  return (
    <Layout title="Seguimiento de Pedido">
      <Link to="/inicio" className="volver">
        ‹ Back a Inicio
      </Link>

      <div className="seguimiento-wrapper">
        <div className="seguimiento-header">
          <h2>Estado de tu Entrega TURTLE INC</h2>
          <span style={{ color: '#888', fontSize: '14px' }}>
            Pedido #{orderNumber}
          </span>
        </div>

        <div className="direccion-envio">
          <strong>Dirección de Entrega:</strong> {direccion}
        </div>

        <div
          className="estado-actual"
          style={{ color: orderArrived ? '#299367' : '#e67e22' }}
        >
          {orderArrived
            ? '¡Tu pedido ya llegó! 🎉🐢'
            : 'Tu pedido está en camino 🚚💨'}
        </div>

        <div className={`pulso-animado ${orderArrived ? 'completo' : ''}`}></div>

        <div className="pasos-seguimiento">
          <div className="paso activo">
            <div className="paso-icono">✓</div>
            <div className="paso-texto">Preparado</div>
          </div>

          <div className="paso activo">
            <div className="paso-icono">📦</div>
            <div className="paso-texto">En camino</div>
          </div>

          <div className={`paso ${orderArrived ? 'activo' : ''}`}>
            <div className="paso-icono">🏠</div>
            <div className="paso-texto">Entregado</div>
          </div>
        </div>

        {!orderArrived && (
          <button
            type="button"
            className="btn-llego"
            onClick={handleLlegoClick}
          >
            Confirmar que ya llegó 🐢
          </button>
        )}
      </div>

      {modalFinal && (
        <div className="modal-overlay">
          <div className="modal-content-pedido">
            <h3>¡Entrega Exitosa! 🎉</h3>
            <p>
              Gracias por confiar en <strong>TURTLE INC</strong>. Esperamos que disfrutes tus nuevas prendas con todo el flow tortugo.
            </p>
            <button
              type="button"
              className="btn-modal"
              onClick={handleAceptarFinal}
            >
              Aceptar y Volver a la Tienda
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
