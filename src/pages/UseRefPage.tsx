import { useRef } from "react";

export const UseRefPage = () => {
  // 1. Crear una referencia
  // inputRef.current será undefined inicialmente. React asignará el elemento DOM a inputRef.current después de que el componente se monte.
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    // 2. Acceder al elemento del DOM
    // inputRef.current apunta al elemento <input>
    // Podemos llamar a métodos del DOM directamente, como .focus()
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Enfocado con useRef!";
    }
  };

  return (
    <div>
      <h1>useRef Hook</h1>
      <p>
        El hook <code>useRef</code> devuelve un objeto mutable{" "}
        <code>.current</code> cuya propiedad se inicializa con el argumento
        pasado (initialValue). El objeto devuelto persistirá durante toda la
        vida del componente.
      </p>
      <p>
        Casos de uso comunes para <code>useRef</code> son:
      </p>
      <ul>
        <li>Acceder a elementos del DOM o componentes de React.</li>
        <li>
          Almacenar valores mutables que no causan un nuevo renderizado cuando
          cambian (a diferencia del estado).
        </li>
      </ul>

      <h2>Ejemplo: Enfocar un Input</h2>
      {/* 3. Adjuntar la referencia al elemento del DOM */}
      <input
        type="text"
        ref={inputRef}
        placeholder="Haz clic en el botón para enfocar"
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <button onClick={handleFocusInput}>Enfocar el Input</button>
      <hr />
      <p>En este ejemplo:</p>
      <ul>
        <li>
          Creamos una referencia <code>inputRef</code> usando{" "}
          <code>useRef(null)</code>. El tipo <code>HTMLInputElement</code> se
          usa para TypeScript, indicando que esta ref se adjuntará a un elemento
          input HTML.
        </li>
        <li>
          Asignamos esta referencia al atributo <code>ref</code> del elemento{" "}
          <code>&lt;input&gt;</code>.
        </li>
        <li>
          Cuando se hace clic en el botón "Enfocar el Input", la función{" "}
          <code>handleFocusInput</code> accede a <code>inputRef.current</code>{" "}
          (que es el nodo del DOM del input) y llama a su método{" "}
          <code>focus()</code>.
        </li>
        <li>
          <code>useRef</code> no causa un nuevo renderizado cuando su propiedad{" "}
          <code>.current</code> cambia.
        </li>
      </ul>
    </div>
  );
};
