import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="alert alert-primary mt-4">
      <h3 className="alert-heading">Usuario ya existe</h3>
      <hr />
      <p>Ingresa un usuario valido</p>
      { JSON.stringify( coords)}
    </div>
  );
};
