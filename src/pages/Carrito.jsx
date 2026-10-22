import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';

export default function Carrito() {
  const { cartItems, total, totalFormatted, changeQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    if (cartItems.length === 0 || total === 0) {
      alert('Tu carrito está vacío. Agrega productos antes de continuar.');
      return;
    }
    navigate('/pedido');
  };

  return (
    <Layout title="Carrito de Compras">
      <main className="carrito-page">
        <Link to="/prendas" className="volver" style={{ margin: '0 0 20px 0' }}>
          ‹ Back
        </Link>

        <h2>Mis productos</h2>

        {cartItems.length === 0 ? (
          <div className="carrito-vacio">
            <p>Tu carrito está vacío actualmente 🐢.</p>
            <Link to="/prendas" className="btn-auth" style={{ maxWidth: '250px', margin: '0 auto', textDecoration: 'none' }}>
              Ir a comprar prendas
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.size}-${index}`} className="producto-carrito">
                <img src={item.image} alt={item.name} />

                <div className="producto-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {item.size && <span className="talla-badge">Talla: {item.size}</span>}
                </div>

                <div className="precio">
                  ${(item.price * item.quantity).toLocaleString('es-CO')}
                </div>

                <div className="cantidad">
                  <button
                    type="button"
                    onClick={() => changeQuantity(index, -1)}
                    title="Disminuir"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => changeQuantity(index, 1)}
                    title="Aumentar"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="eliminar"
                  onClick={() => removeItem(index)}
                  title="Eliminar producto"
                >
                  ×
                </button>
              </div>
            ))}

            <div className="total-seccion">
              Total: <strong>{totalFormatted}</strong>
            </div>

            <button
              type="button"
              className="comprar"
              onClick={handleFinalizarCompra}
            >
              Finalizar compra 🐢
            </button>
          </>
        )}
      </main>
    </Layout>
  );
}
