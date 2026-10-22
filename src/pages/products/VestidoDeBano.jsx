import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function VestidoDeBano() {
  const product = getProductById('vestidodebano');
  return <ProductDetailView product={product} />;
}
