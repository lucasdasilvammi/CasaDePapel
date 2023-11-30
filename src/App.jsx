import Home from "./components/Home"
import Header from "./components/Header"
import Trailers from "./components/Trailers"
import Actors from "./components/Actors"
import Seasons from "./components/Seasons"

import useFetch from "./utils/useFetch"
import {useState} from "react"

const ID = "27436"
let TVMaze = {}

export default function App() {

  const[perso, setPerso] = useState(2);

  const urlID = `https://api.tvmaze.com/shows/${ID}?embed[]=seasons&embed[]=cast`

  const [url, setUrl] = useState(urlID)
  const {isLoading, isError, data} = useFetch(url)
  if(data) {
      TVMaze = {
          summary: data.summary,
          // Image Couverture de l'episode
          image: data._embedded.seasons[0].image.original,
          // Nombre d'épisodes dans la saison
          order: data._embedded.seasons[0].episodeOrder,
          // Numéro de la saison
          number: data._embedded.seasons[0].number,
          // Résumé de la saison
          seasonSummary: data._embedded.seasons[0].summary,

          // Photo de l'acteur
          actorImage: data._embedded.cast[perso].character.image.original,
          // Nom de l'acteur
          actorName: data._embedded.cast[perso].person.name,
          // Nom du personnage dans la série
          actorCaracter: data._embedded.cast[perso].character.name,
          // Pays
          actorCountry: data._embedded.cast[perso].person.country.name,
          // Birthday
          actorBirth: data._embedded.cast[perso].person.birthday,
          // Gender
          actorGender: data._embedded.cast[perso].person.gender,
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
      <Trailers />
      <Header />
      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      {data &&
      <Actors data={TVMaze} setPerso={setPerso}/>
      }

      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      {data &&
      <Seasons data={TVMaze}/>
      }
    </>
  )
}