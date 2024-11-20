import Image from 'next/image';
export const dynamic = 'force-dynamic'


async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();/* usamos .json para obtener el contenido de la api */
  return data.products;
}


export default async function Page() {
  const products = await fetchProducts();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 2: SSR Next</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="py-20 text-center">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={300}
              className="mx-auto"
            />
            <b>{product.title}:</b> {product.price} € (descuento {product.discountPercentage}%)
            =&gt; {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)} €
          </li>
        ))}
      </ul>
    </>
  );
}
