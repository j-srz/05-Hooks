import { useLayoutEffect, useRef, useState } from "react";

export const Character = ({ name, gender }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect()
    setBoxSize({ height, width });
  }, []);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {name}
        </p>
        <p className="mb-1">{gender}</p>
        <footer className="blockquote-footer">Jesús Suarez Licea</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
