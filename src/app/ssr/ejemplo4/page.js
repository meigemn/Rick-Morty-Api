import Image from 'next/image';
export const dynamic = 'force-dynamic'

/* la diferencia con ssr y csr es que en csr no se puede renderizar el contenido de la página en el servidor */
/* aqui no usamos useState porque no queremos guardar en una variable la información que se va a mostrar en la página */
/* la informacion la obtenemos de la api y la renderizamos en la página */
/* no usamos useEffect porque no queremos ejecutar una función cuando se cargue la página */
async function fetchCharacters() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data = await res.json();
  return data.results;
}


export default async function Page() {
  const pokemons = await fetchCharacters();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 4: SSR Next</h2>
      <ul>
        {pokemons.map(poke => (
          <li  className="py-20 text-center">
            <b>{poke.name}</b><br />
            <b>{poke.url}</b>
          </li>
        ))}
      </ul>
    </>
  );
}
