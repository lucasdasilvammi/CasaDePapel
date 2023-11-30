export default function Home({ data }) {

    let summary = data.summary.replace(/(<([^>]+)>)/gi, "");

    return(
        <>
        <div className="bg-home h-screen bg-cover bg-no-repeat bg-center flex items-center">
            <div className="px-marge flex gap-12 flex-col">
                <img src="./src/assets/LogoCasaDePapel.svg" className="" />
                <div className="flex-row flex gap-8">
                    <img src="./src/assets/kalash.svg" className="" />
                    <p className="text-blanc w-home-desc text-home-desc font-ff-roboto uppercase tracking-widest">{summary}</p>
                </div>
            </div>
        </div>
        </>
    )
}