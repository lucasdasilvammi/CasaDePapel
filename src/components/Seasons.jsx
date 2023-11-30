import {useState} from "react"

export default function Seasons({ data }){
    const [season, setSeason] = useState(0)

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
}
  

    return(
        <>
            <div className="bg-noir flex justify-center items-start px-marge gap-12 w-full py-36">
                <img src={data[season].image.original} alt="" className=" w-1/4 rounded-lg"/>
                <div className="flex flex-col justify-between w-3/4 gap-12">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="text-blanc uppercase font-ff-casa text-6xl">Season {data[season].number}</h2>
                            <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest">Episodes order <span className="text-red-500 font-bold">{data[season].episodeOrder} épisodes</span></p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <img src="./src/assets/arrow.svg" className="w-12" alt="" onClick={before}/>
                            <img src="./src/assets/arrow.svg" className="w-12 rotate-180" alt="" onClick={next}/>
                        </div>
                    </div>
                    <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest">vkerubdvfcjkzebsvkjzbvezckj</p>
                    <p className="uppercase text-blanc text-base font-ff-roboto tracking-widest">zrnvkservtkuyerkutyeruky</p>
                </div>
            </div>
        </>
    )
}