import { useState, useEffect } from "react"
import PokimonList from "./PokimonList"
import Pagination from "./Pagination"
import axios from 'axios'
function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(pokemonUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => {
      cancel()
    }
  }, [pokemonUrl])

  function gotoNextPage() {
    setPokemonUrl(nextPageUrl)
  }
  function gotoPrevPage() {
    setPokemonUrl(prevPageUrl)
  }

  if (loading) {
    return 'Loading...'
  }
  return (
    <>
      <PokimonList pokemonname={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
