import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function BuzoOscuroHombre() {
  const product = getProductById('buzooscurohombre');
  return <ProductDetailView product={product} />;
}
