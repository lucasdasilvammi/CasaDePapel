import SelectActor from "./SelectActor"
import {useState} from "react"

export default function Actors({data}){
    const [perso, setPerso] = useState(0)

    return(
        <>
            <div className="h-screen bg-noir bg-wave bg-cover bg-no-repeat flex justify-center items-center flex-row gap-12 px-marge">
                <div className="w-1/3">
                    <img src={data[perso].character.image.original} className="max-h-96" />
                </div>
                <div className="flex flex-col gap-6 w-2/3">
                    <div className="justify-between flex-row flex">
                        <div className="">
                            <h2 className="text-blanc uppercase font-ff-casa text-6xl">{data[perso].person.name}</h2>
                            <h3 className="uppercase text-blanc text-2xl font-ff-roboto tracking-widest font-bold">{data[perso].character.name}</h3>
                        </div>
                        <SelectActor data = {data} setPerso={setPerso}/>
                    </div>
                    <div className="flex-row flex justify-between w-2/3">
                        <div className="">
                            <p className="text-blanc text-lg font-ff-roboto uppercase tracking-widest">Country</p>
                            {/* <h2 className="text-blanc uppercase font-ff-casa text-4xl">{(data[perso].person.country!= null)?data[perso].person.country.name:""} </h2> */}
                            <h2 className="text-blanc uppercase font-ff-casa text-4xl">{(data[perso].person.country!= null)?data[perso].person.country.name:"Inconnu"} </h2>
                        </div>
                        <div className="">
                            <p className="text-blanc text-lg font-ff-roboto uppercase tracking-widest">Birthday</p>
                            <h2 className="text-blanc uppercase font-ff-casa text-4xl">{data[perso].person.birthday}</h2>
                        </div>
                        <div className="">
                            <p className="text-blanc text-lg font-ff-roboto uppercase tracking-widest">Gender</p>
                            <h2 className="text-blanc uppercase font-ff-casa text-4xl">{data[perso].person.gender}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}