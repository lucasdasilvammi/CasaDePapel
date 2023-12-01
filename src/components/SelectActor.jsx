export default function SelectActor({ data, setPerso }) {
  const handlerChange = (e) => {
    e.preventDefault();
    setPerso(e.target.value);
  };
  // console.log(data)
  return (
    <>
        <select
          name=""
          id=""
          onChange={handlerChange}
          className="font-ff-roboto font-normal uppercase bg-none h-fit focus:outline-none"
        >
          {data &&
            data.map((actor, i) => (
              <option
                value={i}
                key={actor.character.id}
                className="font-ff-roboto font-normal uppercase"
              >
                {actor.character.name}
              </option>
            ))}
        </select>
    </>
  );
}
