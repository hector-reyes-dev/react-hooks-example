import { useState } from "react";

export const UseStatePage = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>useState Hook</h1>
      <p>
        El hook useState te permite agregar estado a los componentes
        funcionales.
      </p>
      <h2>Ejemplo: Contador</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <hr />
      <p>
        En este ejemplo, <code>useState(0)</code> inicializa una variable de
        estado llamada <code>contador</code> con el valor 0.
      </p>
      <p>
        <code>setContador</code> es la función que se utiliza para actualizar el
        valor de <code>contador</code>.
      </p>
      <p>
        Cada vez que se hace clic en el botón "Incrementar", se llama a la
        función <code>incrementar</code>, que a su vez llama a{" "}
        <code>setContador</code> para aumentar el valor del contador en 1.
      </p>
    </div>
  );
};
