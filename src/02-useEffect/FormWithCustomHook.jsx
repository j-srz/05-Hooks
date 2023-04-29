import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });

 

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="correo@correo.com"
        className="form-control mt-2"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        className="form-control mt-2"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>

  );
};
