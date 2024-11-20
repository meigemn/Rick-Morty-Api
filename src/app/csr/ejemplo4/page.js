'use client'
import { useState, useEffect } from "react";

/* la diferencia con ssr y csr es que en csr no se puede renderizar el contenido de la página en el servidor */

function Page() {
    const [pokemons, setPokemon] = useState([])
    /*use state nos permite guardar en una variable la información que se va a mostrar en la página */
    /* use state aqui recoge todas las pokemons de la api */

    /*useEffect nos permite ejecutar una función cuando se cargue la página */
    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(data => setProducts(data.products));

        const fetchData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()

            setPokemon(data.results)
        }
        fetchData()

    }, [])


    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 4: CSR React</h2>
            <ul>
                {
                    pokemons.map(pokemon => (
                        <li className="py-20 text-center">

                            <h1>{pokemon.name}</h1>
                            <b>{pokemon.url}:</b> {pokemon.created}


                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
