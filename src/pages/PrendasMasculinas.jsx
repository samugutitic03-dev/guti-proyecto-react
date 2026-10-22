import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PRODUCTS } from '../data/products';

export default function PrendasMasculinas() {
  const productosMasculinos = PRODUCTS.filter((p) => p.category === 'masculino');

  return (
    <Layout title="Prendas Masculinas">
      <Link to="/prendas" className="volver">
        ‹ Back
      </Link>
      <section className="productos">
        {productosMasculinos.map((producto) => (
          <div key={producto.id} className="producto">
            <Link to={`/producto/${producto.slug}`} className="link-producto">
              <img src={producto.mainImage} alt={producto.name} />
              <h3>{producto.name}</h3>
              <p className="precio">{producto.priceFormatted}</p>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}
