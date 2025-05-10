import React, { createContext, useContext, useState } from "react";

// 1. Crear un Contexto
// Este contexto almacenará un tema (claro/oscuro) y una función para cambiarlo.
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// 2. Crear un Componente Proveedor
// Este componente envolverá a los componentes que necesitan acceso al contexto.
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Crear Componentes Consumidores
// Estos componentes usarán el hook useContext para acceder al valor del contexto.

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#333" : "#eee",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

const ThemedPanel = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  const panelStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#555",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    margin: "20px 0",
    border: `1px solid ${theme === "light" ? "#ccc" : "#777"}`,
    borderRadius: "5px",
  };

  return <div style={panelStyle}>{children}</div>;
};

export const UseContextPage = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>useContext Hook</h1>
        <p>
          El hook <code>useContext</code> permite consumir un valor de contexto
          directamente en un componente funcional sin necesidad de anidar
          Componentes Consumidores explícitos o pasar props a través de
          múltiples niveles (prop drilling).
        </p>

        <h2>Ejemplo: Cambio de Tema (Light/Dark Mode)</h2>
        <ThemedPanel>
          <p>
            Este panel y el botón de abajo utilizan el mismo contexto para
            gestionar el tema.
          </p>
          <ThemedButton />
        </ThemedPanel>
        <hr />
        <p>En este ejemplo:</p>
        <ul>
          <li>
            <code>ThemeContext</code> es creado usando{" "}
            <code>createContext</code>.
          </li>
          <li>
            <code>ThemeProvider</code> es un componente que provee el valor del
            contexto (el tema actual y la función para cambiarlo) a sus hijos.
          </li>
          <li>
            <code>ThemedButton</code> y <code>ThemedPanel</code> son componentes
            que consumen el contexto usando{" "}
            <code>useContext(ThemeContext)</code> para acceder al tema y
            aplicarlo a sus estilos, o para obtener la función que permite
            cambiar el tema.
          </li>
          <li>
            Al hacer clic en el botón, se actualiza el estado del tema en{" "}
            <code>ThemeProvider</code>, y todos los componentes que consumen ese
            contexto se vuelven a renderizar con el nuevo valor.
          </li>
        </ul>
      </div>
    </ThemeProvider>
  );
};
