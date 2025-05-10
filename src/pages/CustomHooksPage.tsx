import { useState, useEffect } from "react";

// 1. Definición de un Hook Personalizado
// Un hook personalizado es una función JavaScript cuyo nombre comienza con "use"
// y que puede llamar a otros Hooks.
// Este hook, por ejemplo, podría encapsular la lógica para obtener el tamaño de la ventana.

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Limpieza: remover el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []); // El array vacío asegura que el efecto solo se ejecute al montar y desmontar

  return windowSize;
};

// Otro ejemplo: un hook para un contador simple
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export const CustomHooksPage = () => {
  // 2. Usar el Hook Personalizado en un componente
  const { width, height } = useWindowSize();
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h1>Custom Hooks</h1>
      <p>
        Los Hooks personalizados te permiten extraer la lógica de un componente
        en funciones reutilizables. Son una convención que surge naturalmente
        del diseño de los Hooks, en lugar de ser una característica de React.
      </p>

      <h2>
        Ejemplo 1: <code>useWindowSize</code>
      </h2>
      <p>
        Este hook personalizado rastrea las dimensiones de la ventana del
        navegador.
      </p>
      <p>Ancho de la ventana: {width}px</p>
      <p>Alto de la ventana: {height}px</p>
      <p>
        (Intenta redimensionar la ventana del navegador para ver cómo cambian
        los valores)
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h2>
        Ejemplo 2: <code>useCounter</code>
      </h2>
      <p>Este hook personalizado encapsula la lógica de un contador simple.</p>
      <p>Contador actual: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear a 5</button>

      <hr style={{ margin: "20px 0" }} />
      <p>Beneficios de los Custom Hooks:</p>
      <ul>
        <li>
          <strong>Reutilización:</strong> Puedes usar la misma lógica de estado
          en múltiples componentes.
        </li>
        <li>
          <strong>Organización:</strong> Ayudan a mantener los componentes más
          limpios y enfocados en la UI, separando la lógica compleja.
        </li>
        <li>
          <strong>Testeabilidad:</strong> La lógica contenida en un custom hook
          puede ser probada de forma aislada.
        </li>
      </ul>
    </div>
  );
};
