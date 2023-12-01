import SelectActor from "./SelectActor";
import { useState } from "react";

export default function Actors({ data }) {
  const [perso, setPerso] = useState(0);

  return (
    <>
      <div className="bg-noir py-16 bg-wave bg-cover bg-center bg-no-repeat flex justify-center items-center flex-row xl:flex-row md:flex-row gap-12 px-marge sm:flex-col sm:items-center sm:justify-center">
        {/* <div className="w-1/3 flex items-end">
          <img
            src={data[perso].character.image.original}
            className="max-h-96 rounded-xl shadow-2xl"
          />
        </div> */}

        <div className="self-stretch w-1/3 max-w-sm md:w-4/12 sm:w-full sm:self-center">
        <img
          src={data[perso].character.image.original}
          alt=""
          className="rounded-xl h-full object-cover"
        />
        </div>

        <div className="flex flex-col gap-12 w-2/3">
          <div className="xl:justify-between md:justify-center md:items-center xl:flex-row md:flex-col flex xl:relative md:gap-4 flex-col sm:gap-4">
            <div className="flex flex-col gap-1 xl:items-start items-center">
              <h2 className="text-blanc uppercase font-ff-casa text-7xl leading-10">
                {data[perso].person.name}
              </h2>
              <h3 className="uppercase text-blanc text-xl font-ff-roboto tracking-widest">
                {data[perso].character.name}
              </h3>
            </div>
            <div className="flex gap-4 items-center bg-white px-6 py-4 rounded-xl shadow-xl h-fit md:w-fit xl:absolute right-0 -top-24">
              <img
                src={data[perso].character.image.original}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <p className="text-noir text-sm font-ff-roboto">
                  {data[perso].person.name}
                </p>
                <SelectActor data={data} setPerso={setPerso} />
              </div>
            </div>
          </div>
          <div className="flex-row xl:flex-row md:flex-row flex xl:gap-16 md:gap-8 xl:w-4/5 md:w-full xl:bg-blue-600 md:bg-green-700 sm:bg-yellow-600 xl:items-start items-center xl:justify-start justify-center sm:flex-col">
            <div className="">
              <p className="text-blanc xl:text-base md:text-sm sm:text-base text-base font-ff-roboto uppercase tracking-widest sm:w-full">
                Country
              </p>
              <h2 className="text-blanc uppercase font-ff-casa xl:text-5xl md:text-4xl">
                {data[perso].person.country != null
                  ? data[perso].person.country.name
                  : "Inconnu"}{" "}
              </h2>
            </div>
            <div className="">
              <p className="text-blanc xl:text-base md:text-sm sm:text-base text-base font-ff-roboto uppercase tracking-widest sm:w-full">
                Birthday
              </p>
              <h2 className="text-blanc uppercase font-ff-casa xl:text-5xl md:text-4xl">
                {data[perso].person.birthday}
              </h2>
            </div>
            <div className="">
              <p className="text-blanc xl:text-base md:text-sm sm:text-base text-base font-ff-roboto uppercase tracking-widest sm:w-full">
                Gender
              </p>
              <h2 className="text-blanc uppercase font-ff-casa xl:text-5xl md:text-4xl">
                {data[perso].person.gender}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
