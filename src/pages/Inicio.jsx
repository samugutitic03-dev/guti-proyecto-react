import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Inicio() {
  return (
    <Layout title="Bienvenido a TURTLE INC">
      <div className="contenido-inicio">
        <h2>Bienvenid@ a TURTLE INC, conviértete en todo un tortugo</h2>
        <p>¡Bienvenido a tu nuevo lugar favorito para vestir con estilo!</p>
        <p>
          <strong>¿Buscas algo más que ropa?</strong>
        </p>
        <p>
          Aquí no solo encuentras prendas con diseños únicos, sino una experiencia
          de comodidad, elegancia y autenticidad.
        </p>
        <p>
          Cada artículo que ves fue elegido pensando en ti, en tu personalidad, tu
          actitud y ese estilo que te hace destacar.
        </p>
        <p>
          Explora, elige y sorprende. Desde looks casuales hasta outfits con
          presencia, lo tenemos todo y lo mejor para ti; estamos aquí para
          acompañarte en cada paso con atención personalizada y servicio de calidad.
        </p>
        <p>
          <strong>¿List@ para transformar tu forma de vestir?</strong>
        </p>

        <div style={{ marginTop: '35px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/prendas" className="btn-auth" style={{ maxWidth: '220px', textDecoration: 'none' }}>
            Explorar Colección 🐢
          </Link>
          <Link to="/ultimos-drops" className="btn-auth" style={{ maxWidth: '220px', background: '#222', color: '#fff', textDecoration: 'none' }}>
            Ver Últimos Drops ✨
          </Link>
        </div>
      </div>
    </Layout>
  );
}
