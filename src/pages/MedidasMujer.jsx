import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function MedidasMujer() {
  const navigate = useNavigate();

  return (
    <Layout title="Medidas Mujer">
      <button
        type="button"
        className="volver"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={() => navigate(-1)}
      >
        ‹ Back
      </button>

      <section className="guia-medidas-container">
        <h2>GUÍA DE MEDIDAS (MUJERES)</h2>

        <div className="imagen-guia">
          <img src="/medidas.PNG" alt="Guía de medidas mujer" />
        </div>

        <table className="tabla-medidas">
          <thead>
            <tr>
              <th>Talla</th>
              <th>Ancho Pecho (cm)</th>
              <th>Longitud Manga (cm)</th>
              <th>Longitud Frente (cm)</th>
              <th>Hombro (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>S</strong></td>
              <td>35</td>
              <td>17</td>
              <td>38</td>
              <td>8.5</td>
            </tr>
            <tr>
              <td><strong>M</strong></td>
              <td>37</td>
              <td>18</td>
              <td>39.5</td>
              <td>9</td>
            </tr>
            <tr>
              <td><strong>L</strong></td>
              <td>39</td>
              <td>19</td>
              <td>41</td>
              <td>9.5</td>
            </tr>
            <tr>
              <td><strong>XL</strong></td>
              <td>41</td>
              <td>20</td>
              <td>43</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
