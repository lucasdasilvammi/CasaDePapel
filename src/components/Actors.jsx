export default function Actors({data, setPerso}){

    return(
        <>
            <div className="h-screen bg-noir bg-wave bg-cover bg-no-repeat flex justify-center items-center flex-row gap-12 px-marge w-full">
                <div>
                    <img src={data.actorImage} className="" />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="justify-between flex-row flex">
                        <div>
                            <h2 className="text-blanc uppercase font-ff-casa text-6xl">{data.actorName}</h2>
                            <h3 className="uppercase text-blanc text-2xl font-ff-roboto tracking-widest font-bold">{data.actorCaracter}</h3>
                        </div>
                        <select name="actors" id="my-select" className="h-fit p-4" onChange={(e) => {
                            e.preventDefault();
                            setPerso(e.target.value);

                        }
                        }>
                            <option value={4}>El Professor</option>
                            <option value={0}>Helsinki</option>
                        </select>
                    </div>
                    <div className="flex-row flex justify-between">
                        <div className="">
                            <p className="text-blanc text-lg font-ff-roboto uppercase tracking-widest">Country</p>
                            <h2 className="text-blanc uppercase font-ff-casa text-4xl">{data.actorCountry}</h2>
                        </div>
                        <div className="">
                            <p className="text-blanc text-lg font-ff-roboto uppercase tracking-widest">Birthday</p>
                            <h2 className="text-blanc uppercase font-ff-casa text-4xl">{data.actorBirth}</h2>
                        </div>
                        <div className="">
                            <p className="text-blanc text-lg font-ff-roboto uppercase tracking-widest">Gender</p>
                            <h2 className="text-blanc uppercase font-ff-casa text-4xl">{data.actorGender}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}