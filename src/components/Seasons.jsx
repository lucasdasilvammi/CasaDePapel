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
      <div className="bg-noir flex justify-center items-start px-marge gap-12 w-full py-36">
        <div className="self-stretch w-2/5 max-w-sm">
        <img
          src={data[season].image.original}
          alt=""
          className="rounded-lg h-full object-cover"
        />
        </div>
        <div className="flex flex-col justify-between w-3/5 gap-14">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-blanc uppercase font-ff-casa text-7xl">
                {data[season].name}{" "}
                <span className=" text-xl">Season {data[season].number}</span>
              </h2>
              <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest">
                Episodes order{" "}
                <span className="text-red-500 font-bold">
                  {data[season].episodeOrder} épisodes
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-6">
              <img
                src="./src/assets/arrow.svg"
                className="w-12"
                alt=""
                onClick={before}
              />
              <img
                src="./src/assets/arrow.svg"
                className="w-12 rotate-180"
                alt=""
                onClick={next}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest font-bold">
              Summary
            </p>
            <p className="uppercase text-blanc text-sm font-ff-roboto tracking-widest w-3/4">
              {summary}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest font-bold">
              Main Cast
            </p>
            <div className="flex flex-wrap w-3/4 gap-4">
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
    </>
  );
}
