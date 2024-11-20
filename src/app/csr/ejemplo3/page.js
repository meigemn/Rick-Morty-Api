'use client'
import { useState, useEffect } from "react";


function Page() {
    const [characters, setCharacters] = useState([])
    /* useState nos permite guardar en una variable la información que se va a mostrar en la página */
    /* useEffect nos permite ejecutar una función cuando se cargue la página */
    useEffect(() => {
    
        const fetchData = async () => {
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const data = await res.json()/* guardamos en la variable el contenido de la api */

            setCharacters(data.results)
        }
        fetchData()

    }, [])


    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 3: CSR React</h2>
            <ul>
                {
                    characters.map(character => (
                        <li key={character.id} className="py-20 text-center">{/* gguardamos como clave el id del personaje */}
                            <img src={character.image} alt="foto" className="mx-auto" />
                            <b>{character.name}:</b> {character.created}{/* en negrita aparecerá el nombre y el año de creación */}
                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
