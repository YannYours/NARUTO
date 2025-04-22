import { useState, useEffect } from "react"
import axios from "axios"

export default function Afficher() {
  const [pokemons, setPokemons] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {

    try {

      async function ImportPokemon() {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30")
        const basicList = res.data.results

        const detailsList = await Promise.all(
          basicList.map(async (pokemon) => {
            const detailsRes = await axios.get(pokemon.url)
            return {
              name: pokemon.name,
              abilities: detailsRes.data.abilities.map((a) => a.ability.name),
              sprite: detailsRes.data.sprites.front_default
            }
          })
        )

        setPokemons(detailsList)
      }
      ImportPokemon()
    } catch (err) {
      setMessage("Erreur lors de la recupération des pokémons")
      console.error(err)
    }

  }, [])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Liste des 10 premiers Pokémon</h2>

      {message && <p className="text-danger">{message}</p>}

      <ul className="list-group">
        {pokemons.map((pokemon, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-center">
              <img src={pokemon.sprite} alt={pokemon.name} style={{ width: 60, marginRight: 15 }} />
              <div>
                <strong>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong>
                <p className="mb-1">Capacités :</p>
                <ul>
                  {pokemon.abilities.map((ability, i) => (
                    <li key={i}>
                      {ability.charAt(0).toUpperCase() + ability.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
