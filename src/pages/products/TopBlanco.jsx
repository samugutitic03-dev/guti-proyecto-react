import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function TopBlanco() {
  const product = getProductById('topblanco');
  return <ProductDetailView product={product} />;
}
