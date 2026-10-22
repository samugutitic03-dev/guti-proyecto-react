import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function ChaquetaMujer() {
  const product = getProductById('chaquetamujer');
  return <ProductDetailView product={product} />;
}
