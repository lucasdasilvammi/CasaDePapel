export default function SelectActor({ data, setPerso }) {
    const handlerChange = (e) => {
        e.preventDefault();
        setPerso(e.target.value);
    }
    // console.log(data)
    return (
      <>
        <select name="" id="" onChange={handlerChange}>
          {data && data.map((actor, i) => <option value={i} key={actor.character.id}>{actor.character.name}</option>)}
        </select>
      </>
    );
  }
  