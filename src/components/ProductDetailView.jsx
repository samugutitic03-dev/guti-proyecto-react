import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { useCart } from '../context/CartContext';

export default function ProductDetailView({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [addedMessage, setAddedMessage] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setAddedMessage(true);
    setTimeout(() => {
      navigate('/carrito');
    }, 400);
  };

  return (
    <Layout title={product.name || product.detailTitle}>
      <section className="detalle-producto">
        {/* Galería de imágenes */}
        <div className="galeria">
          {product.gallery.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${product.detailTitle} vista ${idx + 1}`}
            />
          ))}
        </div>

        {/* Información de compra */}
        <div className="info">
          <p className="codigo">Item: {product.code}</p>
          <h1>{product.detailTitle}</h1>
          <h2>{product.priceFormatted}</h2>
          <hr />

          <p>{product.modelNote}</p>
          <p>{product.description}</p>

          <div className="tallas">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={selectedSize === size ? 'activa' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="boton1"
            onClick={handleAddToCart}
          >
            {addedMessage ? '¡AGREGADO AL CARRITO! 🐢' : 'AGREGAR AL CARRITO'}
          </button>

          <Link to={product.sizeGuideUrl} className="boton2">
            MEDIDAS DE UNA TALLA
          </Link>

          <div className="beneficios">
            <div className="card-beneficio">
              <h3>Envíos gratis</h3>
              <p>Aplica para la ropa sin descuentos.</p>
            </div>

            <div className="card-beneficio">
              <h3>Llega en 7 días</h3>
              <p>Solo 7 días hábiles para ciudades principales.</p>
            </div>

            <div className="card-beneficio">
              <h3>Caparazones</h3>
              <p>Recibirás por tu compra {product.rewardCaparazones} caparazones.</p>
            </div>

            <div className="card-beneficio">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
