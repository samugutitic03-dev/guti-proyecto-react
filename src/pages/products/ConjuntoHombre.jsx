import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function ConjuntoHombre() {
  const product = getProductById('conjuntohombrebuzoysudadera');
  return <ProductDetailView product={product} />;
}
