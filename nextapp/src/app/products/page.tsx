import ProductGrid from "./ProductGrid";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 30 }, 
  });

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
