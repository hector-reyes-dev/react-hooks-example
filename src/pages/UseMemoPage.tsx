import { useState, useMemo } from "react";

// Una función "costosa" para simular un cálculo pesado
const expensiveCalculation = (num: number) => {
  console.log("Calculando...");
  // Simulamos un retraso para que sea notable
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

export const UseMemoPage = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // Usamos useMemo para memorizar el resultado de expensiveCalculation.
  // Solo se volverá a calcular si 'number' cambia.
  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>useMemo Hook</h1>
      <p>
        El hook <code>useMemo</code> memoriza el resultado de una función,
        evitando recálculos innecesarios en cada renderizado si las dependencias
        no han cambiado. Esto es útil para optimizar el rendimiento de cálculos
        costosos.
      </p>

      <h2>Ejemplo: Cálculo Costoso Memorizado</h2>
      <div>
        <p>
          Contador (cambiar esto NO recalculará el valor de abajo si 'number' no
          cambia): {count}
        </p>
        <button onClick={() => setCount(count + 1)}>
          Incrementar Contador
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="numberInput">Número para cálculo costoso: </label>
        <input
          id="numberInput"
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          style={{ width: "80px", marginRight: "10px" }}
        />
        <p>
          Resultado del cálculo (<code>expensiveCalculation({number})</code>):{" "}
          {calculatedValue}
        </p>
        <p>(Abre la consola para ver cuándo se ejecuta "Calculando...")</p>
      </div>
      <hr />
      <p>En este ejemplo:</p>
      <ul>
        <li>
          <code>expensiveCalculation</code> es una función que simula un trabajo
          computacionalmente intensivo.
        </li>
        <li>
          <code>
            {"useMemo(() => (expensiveCalculation(number), [number]))"}
          </code>{" "}
          asegura que <code>expensiveCalculation</code> solo se llame de nuevo
          si el valor de <code>number</code> cambia.
        </li>
        <li>
          Cambiar el <code>count</code> (que no es una dependencia de{" "}
          <code>useMemo</code>) no provocará que{" "}
          <code>expensiveCalculation</code> se ejecute nuevamente, optimizando
          el rendimiento.
        </li>
        <li>
          Si no usáramos <code>useMemo</code>,{" "}
          <code>expensiveCalculation(number)</code> se ejecutaría en cada
          renderizado del componente <code>UseMemoPage</code>, incluso cuando
          solo cambia <code>count</code>.
        </li>
      </ul>
    </div>
  );
};
