import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PRODUCTS } from '../data/products';

export default function Busqueda() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const resultados = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.detailTitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.gender.toLowerCase().includes(q)
    );
  });

  return (
    <Layout title={`Búsqueda: "${query}"`}>
      <Link to="/inicio" className="volver">
        ‹ Back
      </Link>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 40px 20px' }}>
        <h2 style={{ fontSize: '24px', color: '#222', marginBottom: '25px', textAlign: 'left' }}>
          {resultados.length > 0
            ? `Se encontraron ${resultados.length} resultado(s) para "${query}":`
            : `No encontramos prendas que coincidan con "${query}".`}
        </h2>

        {resultados.length > 0 ? (
          <div className="productos" style={{ padding: '0' }}>
            {resultados.map((producto) => (
              <div key={producto.id} className="producto">
                <Link to={`/producto/${producto.slug}`} className="link-producto">
                  <img src={producto.mainImage} alt={producto.name} />
                  <h3>{producto.name}</h3>
                  <p className="precio">{producto.priceFormatted}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px 20px' }}>
            <p style={{ fontSize: '18px', color: '#666' }}>
              Intenta buscar por palabras clave como "buzo", "camiseta", "top", "hombre" o "mujer" 🐢.
            </p>
            <Link to="/prendas" className="btn-auth" style={{ maxWidth: '250px', margin: '20px auto 0 auto', textDecoration: 'none' }}>
              Ver todas las prendas
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}
