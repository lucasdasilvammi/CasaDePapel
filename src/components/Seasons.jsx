export default function Seasons({ data }){
    return(
        <>
            <div className="bg-noir h-screen flex justify-center items-start gap-12 px-marge">
                <img src={data.image} alt="" className=" w-1/4 rounded-lg"/>
                <div className="flex flex-col">
                    <h2 className="text-blanc uppercase font-ff-casa text-6xl">Season {data.number}</h2>
                    <p className="">Episodes order <span className="text-red-500">{data.order} épisodes</span></p>
                </div>
                <div className="flex flex-row gap-6">

                </div>
            </div>
        </>
    )
}