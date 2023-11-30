export default function AllActors({ data }) {
    // console.log(data)
    return (
      <>
      <div className="flex flex-wrap w-3/4">
        {data && data.map((actor) =>
        <img className="" src={actor.character.image.original} alt="" />)}
      </div>
      </>
    );
  }
  