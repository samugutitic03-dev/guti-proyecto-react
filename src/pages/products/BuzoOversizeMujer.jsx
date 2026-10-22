import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function BuzoOversizeMujer() {
  const product = getProductById('buzooversizemujer');
  return <ProductDetailView product={product} />;
}
