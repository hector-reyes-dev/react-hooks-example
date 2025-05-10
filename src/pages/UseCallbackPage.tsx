import React, { useState, useCallback } from "react";

// Un componente hijo que recibe una función como prop
const ChildComponent = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Renderizando ChildComponent...");
  return <button onClick={onClick}>Haz clic en mí (Hijo)</button>;
});

export const UseCallbackPage = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Sin useCallback: esta función se recrea en cada renderizado de UseCallbackPage
  // const handleClick = () => {
  //   console.log('Botón clickeado, contador actual:', count);
  //   // Podríamos hacer algo con count aquí si fuera necesario
  // };

  // Con useCallback: la función handleClick se memoriza.
  // Solo se recreará si 'count' (su dependencia) cambia.
  const handleClick = useCallback(() => {
    console.log(
      "Botón clickeado (callback memorizado), contador actual:",
      count
    );
    // Si la función necesita acceder al valor más reciente de 'count' y no queremos que 'count' sea una dependencia
    // (lo que haría que la función se recree cada vez que 'count' cambia, anulando el propósito de useCallback en algunos escenarios),
    // podríamos usar la forma funcional de setState si estuviéramos actualizando el estado aquí.
    // Por ejemplo: setCount(prevCount => prevCount + 1);
    // En este caso, solo estamos registrando, por lo que 'count' como dependencia es apropiado si la lógica depende de él.
  }, [count]); // Dependencia: si count cambia, la función se recrea.

  return (
    <div>
      <h1>useCallback Hook</h1>
      <p>
        El hook <code>useCallback</code> devuelve una versión memorizada de una
        función callback. Esto es útil para optimizar el rendimiento,
        especialmente cuando se pasan callbacks a componentes hijos optimizados
        que dependen de la igualdad referencial para prevenir renders
        innecesarios (por ejemplo, componentes envueltos en{" "}
        <code>React.memo</code>).
      </p>

      <h2>Ejemplo: Callback Memorizado para Componente Hijo</h2>
      <p>Contador (padre): {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar Contador (Padre)
      </button>
      <br />
      <button
        onClick={() => setOtherState(!otherState)}
        style={{ marginTop: "10px" }}
      >
        Cambiar Otro Estado (Padre) - Esto NO debería re-renderizar
        ChildComponent si handleClick está memorizado
      </button>
      <p>Estado del Otro Botón: {otherState.toString()}</p>

      <div
        style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
      >
        <p>Componente Hijo:</p>
        <ChildComponent onClick={handleClick} />
        <p>
          (Abre la consola para ver cuándo se renderiza "ChildComponent...")
        </p>
      </div>
      <hr />
      <p>En este ejemplo:</p>
      <ul>
        <li>
          <code>ChildComponent</code> está envuelto en <code>React.memo</code>,
          lo que significa que solo se volverá a renderizar si sus props
          cambian.
        </li>
        <li>
          La función <code>handleClick</code> se pasa como prop{" "}
          <code>onClick</code> a <code>ChildComponent</code>.
        </li>
        <li>
          Si <code>handleClick</code> no estuviera envuelta en{" "}
          <code>useCallback</code>, se crearía una nueva instancia de la función
          en cada renderizado de <code>UseCallbackPage</code>. Esto haría que la
          prop <code>onClick</code> de <code>ChildComponent</code> sea diferente
          en cada renderizado, causando que <code>ChildComponent</code> se
          vuelva a renderizar innecesariamente incluso cuando solo cambia{" "}
          <code>otherState</code> en el padre.
        </li>
        <li>
          Con <code>useCallback(..., [count])</code>, <code>handleClick</code>{" "}
          solo se recrea si <code>count</code> cambia. Si solo{" "}
          <code>otherState</code> cambia, <code>handleClick</code> mantiene la
          misma referencia, y <code>ChildComponent</code> no se vuelve a
          renderizar.
        </li>
        <li>
          Prueba a comentar la versión con <code>useCallback</code> y
          descomentar la versión sin él para observar la diferencia en la
          consola cuando haces clic en "Cambiar Otro Estado (Padre)".
        </li>
      </ul>
    </div>
  );
};
