import { useRef } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Character } from "./Character";
import { Loading } from "./Loading";

export const MultipleCustomHooks = () => {
  const { counter, setCounter, increment, decrement } = useCounter(1);
  const inputRef = useRef();

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const bajar = () => {
    if (counter === 1) {
      return;
    } else {
      decrement();
    }
  };

  const search = () => {
    inputRef.current.select();

    setCounter(inputRef.current.value);
  };

  const { name, gender } = !!data && data;

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />

      <div className="input-group mb-3">
        <input
          type="number"
          min={0}
          className="form-control"
          placeholder="Here the ID (Pendiente)"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          ref={inputRef}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={search}
        >
          Search
        </button>
      </div>

      {isLoading ? <Loading /> : <Character name={name} gender={gender} />}

      <div className="row">
        <button
          className="btn btn-primary col"
          onClick={() => {
            bajar();
          }}
          disabled={isLoading}
        >
          Previous
        </button>
        <button
          className="btn btn-primary col"
          onClick={() => {
            increment();
          }}
          disabled={isLoading}
        >
          Next
        </button>
      </div>
    </>
  );
};
