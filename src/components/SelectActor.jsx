export default function SelectActor({ data, setPerso }) {
    const handlerChange = (e) => {
        e.preventDefault();
        setPerso(e.target.value);
    }
    // console.log(data)
    return (
      <>
        <select name="" id="" onChange={handlerChange} className="font-ff-roboto tracking-widest font-normal uppercase w-fit py-2 bg-none px-6 h-fit focus:outline-none">
          {data && data.map((actor, i) => <option value={i} key={actor.character.id} className="font-ff-roboto tracking-widest font-normal uppercase hover:text-blue-500">{actor.character.name}</option>)}
        </select>
      </>
    );
  }
  