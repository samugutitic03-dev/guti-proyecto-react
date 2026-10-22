import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function BuzoRosaMujer() {
  const product = getProductById('buzorosamujer');
  return <ProductDetailView product={product} />;
}
