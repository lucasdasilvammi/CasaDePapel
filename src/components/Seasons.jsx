import { useState } from "react";

export default function Seasons({ data, actorsdata }) {
  const [season, setSeason] = useState(0);

  const next = () => {
    // setCount(count + 1);
    const nextCount = (season + 1) % data.length;
    setSeason(nextCount);
  };

  const before = () => {
    const nextCount = (season - 1 + data.length) % data.length;
    setSeason(nextCount);
  };

  const handlerChange = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };

  let summary = data[season].summary.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      <div className="bg-noir flex xl:flex-row flex-col justify-center items-start px-marge gap-6 xl:gap-12 w-full xl:py-36 py-16">
        <div className="xl:self-stretch self-center w-full xl:w-2/5 max-w-sm xl:max-w-sm">
          <img
            src={data[season].image.original}
            alt=""
            className=" rounded-2xl h-full object-cover shadow-[0_0px_75px_rgba(189,_48,_45,_0.3)]"
          />
        </div>
        <div className="flex flex-col justify-between xl:w-3/5 gap-8 sm:gap-14">
          <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-center justify-center gap-10 md:gap-2">
            <div className="flex flex-col gap-6 md:gap-0 justify-center items-center xl:justify-start xl:items-start">
              <h2 className="text-blanc uppercase font-ff-casa text-7xl text-center sm:text-start leading-10 md:leading-normal">
                {data[season].name}{" "}
                <span className="text-xl">Season {data[season].number}</span>
              </h2>
              <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest text-center sm:text-start">
                Episodes order{" "}
                <span className="text-red-500 font-bold">
                  {data[season].episodeOrder} épisodes
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-6">
              <img
                src="./src/assets/arrow.svg"
                className="w-10 md:w-12"
                alt=""
                onClick={before}
              />
              <img
                src="./src/assets/arrow.svg"
                className="w-10 md:w-12 rotate-180"
                alt=""
                onClick={next}
              />
            </div>
          </div>

          <div className="flex sm:flex-row md:flex-row xl:flex-col flex-col gap-12">
            <div className="flex flex-col gap-4 sm:w-1/2 md:w-1/2 xl:w-full">
              <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest font-bold text-center sm:text-start">
                Summary
              </p>
              <p className="uppercase text-blanc text-sm font-ff-roboto tracking-widest xl:w-3/4 text-center sm:text-start">
                {summary}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:w-1/2 md:w-1/2 xl:w-full">
              <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest font-bold text-center sm:text-start">
                Main Cast
              </p>
              <div className="flex flex-wrap xl:w-3/4 gap-4 justify-center sm:justify-start">
                {actorsdata &&
                  actorsdata.map((actor) => (
                    <img
                      className="w-12 h-12 rounded-full aspect-square object-cover"
                      src={actor.character.image.original}
                      alt=""
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
