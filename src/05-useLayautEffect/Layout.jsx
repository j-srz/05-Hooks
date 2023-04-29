import { Character, Loading } from "../03-examples";
import { useCounter,useFetch } from "../hooks";


export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { name, gender } = !!data && data;

  return (
    <>
      <h1>Rick & Morty Characters</h1>
      <hr />

      {isLoading ? <Loading /> : <Character name={name} gender={gender} />}

      <button
        className="btn btn-primary col"
        onClick={() => {
          increment();
        }}
        disabled={isLoading}
      >
        Next
      </button>
    </>
  );
};
