import ButtonCVA from "./Buttons";
// import { ReactComponent as Netflix } from './assets/Netflix.svg'
// import { ReactComponent as Person } from './assets/Person.svg'
import Netflix from "./Netflix";
import Person from "./Person";

export default function Home({ data }) {

    let summary = data.summary.replace(/(<([^>]+)>)/gi, "");

    return(
        <>
        <div className="bg-home h-screen bg-cover bg-no-repeat bg-center flex items-center">
            <div className="px-marge-phone md:px-marge-tablet sm:px-marge-phone xl:px-marge flex gap-12 flex-col justify-center items-center md:justify-start md:items-start">
                <img src="./src/assets/LogoCasaDePapel.svg" className="" />
                <div className="md:flex-row flex flex-col justify-center items-center md:gap-8">
                    <img src="./src/assets/kalash.svg" className="sm:max-w-kalash md:max-w-kalash-md -rotate-90 md:rotate-0" />
                    <p className="text-blanc max-w-home-desc md:text-home-desc sm:text-desc-phone font-ff-roboto uppercase tracking-widest">{summary}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                    <a href={data.watch} target="_blank"><ButtonCVA intent={'primary'} size={'medium'} hover={'primary'}><Netflix/> Watch now</ButtonCVA></a>
                    <a href="#Characters"><ButtonCVA intent={'secondary'} size={'medium'} hover={'secondary'}><Person/> Characters </ButtonCVA></a>
                </div>
            </div>
        </div>
        </>
    )
}