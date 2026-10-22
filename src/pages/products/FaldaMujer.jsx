import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function FaldaMujer() {
  const product = getProductById('faldamujer');
  return <ProductDetailView product={product} />;
}
