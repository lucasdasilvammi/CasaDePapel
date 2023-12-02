import SelectActor from "./SelectActor";
import { useState } from "react";

export default function Actors({ data }) {
  const [perso, setPerso] = useState(0);

  return (
    <>
      <div className="bg-noir xl:py-24 md:py-16 pt-8 pb-24 xl:bg-wave md:bg-wave sm:pt-16 bg-wave-mobile bg-cover md:pb-24 bg-center bg-no-repeat flex justify-center items-center xl:flex-row md:flex-row gap-8 xl:gap-12 md:gap-12 px-marge flex-col">
        <div className="xl:self-stretch xl:w-1/3 max-w-sm md:w-4/12 sm:w-full w-4/5 self-center -mb-16">
        <img
          src={data[perso].character.image.original}
          alt=""
          className="rounded-2xl h-full object-cover"
        />
        </div>

        <div className="flex flex-col md:gap-6 xl:gap-12 xl:w-2/3 md:w-2/3 gap-6 w-full">
          <div className="xl:justify-between md:justify-center md:items-center xl:flex-row md:flex-col flex xl:relative md:gap-4 flex-col gap-4 w-full items-center">
            <div className="flex flex-col xl:gap-1 md:gap-1 gap-0 xl:items-start items-center">
              <h2 className="text-blanc uppercase font-ff-casa xl:text-7xl md:text-7xl sm:text-7xl text-6xl xl:leading-10 md:leading-10 text-center"  style={{ textShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)' }}>
                {data[perso].person.name}
              </h2>
              <h3 className="uppercase text-blanc xl:text-xl md:text-xl sm:text-xl text-base font-ff-roboto tracking-widest">
                {data[perso].character.name}
              </h3>
            </div>
            <div className="flex flex-col xl:flex-row md:flex-row sm:flex-row gap-4 items-center bg-white px-6 py-4 rounded-xl shadow-xl h-fit md:w-fit w-fit xl:absolute right-0 -top-24">
              <img
                src={data[perso].character.image.original}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <p className="text-noir text-sm font-ff-roboto text-center xl:text-start sm:text-start md:text-start">
                  {data[perso].person.name}
                </p>
                <SelectActor data={data} setPerso={setPerso} />
              </div>
            </div>
          </div>
          <div className="xl:flex-row md:flex-row flex xl:gap-16 md:gap-8 gap-2 xl:w-4/5 md:w-full xl:items-start items-center xl:justify-start justify-center flex-col">
            <div className="">
              <p className="text-blanc xl:text-base md:text-sm text-sm text-center font-ff-roboto uppercase tracking-widest w-full">
                Country
              </p>
              <h2 className="text-blanc uppercase font-ff-casa text-3xl text-center xl:text-5xl md:text-4xl">
                {data[perso].person.country != null
                  ? data[perso].person.country.name
                  : "Inconnu"}{" "}
              </h2>
            </div>
            <div className="">
              <p className="text-blanc xl:text-base md:text-sm text-sm text-center font-ff-roboto uppercase tracking-widest w-full">
                Birthday
              </p>
              <h2 className="text-blanc uppercase font-ff-casa text-3xl text-center xl:text-5xl md:text-4xl">
                {data[perso].person.birthday}
              </h2>
            </div>
            <div className="">
              <p className="text-blanc xl:text-base md:text-sm text-sm text-center font-ff-roboto uppercase tracking-widest w-full">
                Gender
              </p>
              <h2 className="text-blanc uppercase font-ff-casa text-3xl text-center xl:text-5xl md:text-4xl">
                {data[perso].person.gender}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
