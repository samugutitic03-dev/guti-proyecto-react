import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function GorraBlanca() {
  const product = getProductById('gorrablanca');
  return <ProductDetailView product={product} />;
}
