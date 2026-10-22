import Layout from '../components/Layout';
import { DROPS } from '../data/products';

export default function UltimosDrops() {
  return (
    <Layout title="Últimos drops">
      <section className="productos">
        {DROPS.map((drop) => (
          <div key={drop.id} className="link-producto">
            <div className="producto">
              <img src={drop.image} alt={drop.alt} />
              <span className="proximamente">{drop.badge}</span>
              <p className="nuevo">{drop.badge}</p>
              <h3>{drop.name}</h3>
              <p className="precio">{drop.price}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
