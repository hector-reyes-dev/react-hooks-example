import { useReducer } from "react";

// 1. Definir el estado inicial
const initialState = { count: 0, step: 1 };

// 2. Definir la función reducer
// El reducer toma el estado actual y una acción, y devuelve el nuevo estado.
function reducer(
  state: typeof initialState,
  action: { type: string; payload?: number }
) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "setStep":
      return { ...state, step: action.payload || 1 };
    default:
      throw new Error("Acción desconocida");
  }
}

export const UseReducerPage = () => {
  // 3. Usar el hook useReducer
  // Devuelve el estado actual y una función dispatch para enviar acciones al reducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>
        El hook <code>useReducer</code> es una alternativa a{" "}
        <code>useState</code> para manejar lógicas de estado más complejas en un
        componente. Es especialmente útil cuando el próximo estado depende del
        anterior o cuando la lógica de actualización del estado es complicada.
      </p>

      <h2>Ejemplo: Contador Avanzado</h2>
      <p>Contador: {state.count}</p>
      <p>Paso actual: {state.step}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Resetear</button>
      <div>
        <label htmlFor="stepInput">Establecer paso: </label>
        <input
          id="stepInput"
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: Number(e.target.value) })
          }
          style={{ width: "60px", marginLeft: "5px" }}
        />
      </div>
      <hr />
      <p>En este ejemplo:</p>
      <ul>
        <li>
          <code>initialState</code> define la forma inicial de nuestro estado.
        </li>
        <li>
          La función <code>reducer</code> contiene la lógica para actualizar el
          estado basado en diferentes acciones (<code>increment</code>,{" "}
          <code>decrement</code>, <code>reset</code>, <code>setStep</code>).
        </li>
        <li>
          <code>useReducer(reducer, initialState)</code> inicializa el estado y
          nos da una función <code>dispatch</code>.
        </li>
        <li>
          Llamamos a <code>dispatch</code> con un objeto de acción (que tiene
          una propiedad <code>type</code> y opcionalmente un{" "}
          <code>payload</code>) para indicar cómo queremos cambiar el estado.
        </li>
        <li>
          <code>useReducer</code> es preferible sobre <code>useState</code>{" "}
          cuando tienes una lógica de estado compleja que involucra múltiples
          sub-valores o cuando el siguiente estado depende del anterior.
        </li>
      </ul>
    </div>
  );
};
