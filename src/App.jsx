import Home from "./components/Home"
import Header from "./components/Header"
import Trailers from "./components/Trailers"
import Actors from "./components/Actors"
import Seasons from "./components/Seasons"
import Footer from "./components/Footer"

import useFetch from "./utils/useFetch"
import {useState} from "react"

const ID = "27436"
let TVMaze = {}

export default function App() {

  const [perso, setPerso] = useState(0);

  const urlID = `https://api.tvmaze.com/shows/${ID}?embed[]=seasons&embed[]=cast`

  const [url, setUrl] = useState(urlID)
  const {isLoading, isError, data} = useFetch(url)
  if(data) {
      TVMaze = {
          watch: data.officialSite,
          summary: data.summary,
          // Image Couverture de l'episode
          image: data._embedded.seasons[0].image.original,
          // Nombre d'épisodes dans la saison
          order: data._embedded.seasons[0].episodeOrder,
          // Numéro de la saison
          number: data._embedded.seasons[0].number,
          // Résumé de la saison
          seasonSummary: data._embedded.seasons[0].summary,

          listActor: data._embedded.cast, 
          listSeasons: data._embedded.seasons, 
  }

  console.log(data)
  }
  
  
  return (
    <>
      <Header />
      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      {data &&
      <Home data={TVMaze}/>
      }
      {/* <Trailers /> */}
      <Header />
      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      {data &&
      <Actors data={TVMaze.listActor} setPerso={setPerso} perso={perso}/>
      }

      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      {data &&
      <Seasons data={TVMaze.listSeasons} actorsdata={TVMaze.listActor} setPerso={setPerso}/>
      }
      <Footer />
    </>
  )
}