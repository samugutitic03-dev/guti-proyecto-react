import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useOrder } from '../context/OrderContext';
import { useCart } from '../context/CartContext';

export default function Pedido() {
  const [formData, setFormData] = useState({
    direccion: '',
    telefono: '',
    api: '',
    aviso: 'si',
    seguimiento: 'si'
  });

  const [mostrarModalNo, setMostrarModalNo] = useState(false);
  const { saveOrder } = useOrder();
  const { totalFormatted, clearCart } = useCart();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.direccion.trim() || !formData.telefono.trim()) {
      alert('Por favor completa la dirección y el teléfono.');
      return;
    }

    const orderPayload = {
      ...formData,
      fecha: new Date().toLocaleDateString('es-CO'),
      total: totalFormatted
    };

    saveOrder(orderPayload);
    clearCart();

    if (formData.seguimiento === 'si') {
      navigate('/seguimiento');
    } else {
      setMostrarModalNo(true);
    }
  };

  const handleCerrarModalNo = () => {
    setMostrarModalNo(false);
    navigate('/inicio');
  };

  return (
    <Layout title="Confirmación de Pedido">
      <Link to="/carrito" className="volver">
        ‹ Back al Carrito
      </Link>

      <div className="pedido-container">
        <h2>Datos de Entrega y Envío</h2>

        <form className="pedido-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="direccion">Dirección de Entrega *</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Ej: Carrera 82 # 9A Sur 79, Medellín"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono / Celular de Contacto *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ej: 300 123 4567"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="api">Instrucciones o Notas Especiales</label>
            <input
              type="text"
              id="api"
              name="api"
              placeholder="Ej: Dejar en portería o timbre 302"
              value={formData.api}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>¿Deseas recibir avisos de tu pedido por SMS/WhatsApp?</label>
            <div className="opciones-radio">
              <label>
                <input
                  type="radio"
                  name="aviso"
                  value="si"
                  checked={formData.aviso === 'si'}
                  onChange={handleChange}
                />
                Sí, mantenerme informado
              </label>
              <label>
                <input
                  type="radio"
                  name="aviso"
                  value="no"
                  checked={formData.aviso === 'no'}
                  onChange={handleChange}
                />
                No por ahora
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>¿Deseas activar el seguimiento en tiempo real?</label>
            <div className="opciones-radio">
              <label>
                <input
                  type="radio"
                  name="seguimiento"
                  value="si"
                  checked={formData.seguimiento === 'si'}
                  onChange={handleChange}
                />
                Sí, ver tracking
              </label>
              <label>
                <input
                  type="radio"
                  name="seguimiento"
                  value="no"
                  checked={formData.seguimiento === 'no'}
                  onChange={handleChange}
                />
                No, finalizar aquí
              </label>
            </div>
          </div>

          <button type="submit" className="btn-pedido">
            Confirmar Pedido 🐢
          </button>
        </form>
      </div>

      {mostrarModalNo && (
        <div className="modal-overlay">
          <div className="modal-content-pedido">
            <h3>¡Pedido Confirmado! 🎉</h3>
            <p>
              Tu pedido ha sido procesado correctamente. Recibirás tus prendas Turtle Inc en la dirección ingresada en los próximos días hábiles.
            </p>
            <button
              type="button"
              className="btn-modal"
              onClick={handleCerrarModalNo}
            >
              Aceptar e ir a Inicio
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
