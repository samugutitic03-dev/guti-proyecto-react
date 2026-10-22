import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Pago() {
  const [pagado, setPagado] = useState(false);
  const [tarjeta, setTarjeta] = useState('');
  const [titular, setTitular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');

  const handlePagar = (e) => {
    e.preventDefault();
    setPagado(true);
  };

  return (
    <Layout title="Pago Directo | TURTLE INC">
      <Link to="/inicio" className="volver">
        ‹ Back
      </Link>

      <div className="pago-layout">
        <div className="pago-producto-resumen">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPyiUbDU6mDCChqtKs_xhTOrKP3eNNP82OSHLpzEWLUQpn6t0wetKXdo&s=10"
            alt="Camiseta"
          />
          <h2>Camiseta Oversize</h2>
          <p>Color: Negro</p>
          <p>Talla: M</p>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2e7d32', marginTop: '15px' }}>
            Total: <span>$199.000</span>
          </div>
        </div>

        <div className="pago-formulario">
          <h2 style={{ marginBottom: '20px', color: '#222' }}>Información de Pago</h2>

          <form onSubmit={handlePagar}>
            <label>Número de tarjeta</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={tarjeta}
              onChange={(e) => setTarjeta(e.target.value)}
              required
            />

            <label>Nombre del titular</label>
            <input
              type="text"
              placeholder="Nombre completo"
              value={titular}
              onChange={(e) => setTitular(e.target.value)}
              required
            />

            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flex: 1 }}>
                <label>Dirección</label>
                <input
                  type="text"
                  placeholder="Ej: Cra 82 # 9A Sur 79"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />
              </div>

              <div style={{ flex: 1 }}>
                <label>Número de celular</label>
                <input
                  type="tel"
                  placeholder="3001234567"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-pedido" style={{ marginTop: '15px' }}>
              Confirmar Pago
            </button>
          </form>

          {pagado && (
            <div className="pago-exitoso">
              ✅ ¡Compra realizada con éxito!
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
