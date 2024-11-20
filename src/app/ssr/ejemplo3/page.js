import Image from 'next/image';
export const dynamic = 'force-dynamic'
/* la diferencia con ssr y csr es que en csr no se puede renderizar el contenido de la página en el servidor */
/* aqui no usamos useState porque no queremos guardar en una variable la información que se va a mostrar en la página */
/* la informacion la obtenemos de la api y la renderizamos en la página */
/* no usamos useEffect porque no queremos ejecutar una función cuando se cargue la página */

async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data = await res.json();
  return data.results;
}


export default async function Page() {
  const characters = await fetchCharacters();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 3: SSR Next</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id} className="py-20 text-center">
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <b>{character.name}</b>
          </li>
        ))}
      </ul>
    </>
  );
}
