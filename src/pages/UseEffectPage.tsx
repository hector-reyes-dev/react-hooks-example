import { useState, useEffect } from "react";

export const UseEffectPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una llamada a una API
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulamos un retraso de red
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const response = { message: "¡Datos cargados exitosamente!" };
        setData(response.message);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Función de limpieza (opcional)
    // Se ejecuta cuando el componente se desmonta o antes de que el efecto se ejecute de nuevo (si las dependencias cambian)
    return () => {
      console.log(
        "El componente UseEffectPage se está desmontando o el efecto se va a re-ejecutar."
      );
      // Aquí podrías cancelar suscripciones, limpiar timers, etc.
    };
  }, []); // El array vacío como segundo argumento significa que el efecto se ejecutará solo una vez (al montar el componente) y la limpieza al desmontar.

  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>
        El hook <code>useEffect</code> te permite realizar efectos secundarios
        en componentes funcionales. Algunos ejemplos comunes son: peticiones de
        datos, suscripciones, o manipulaciones manuales del DOM.
      </p>

      <h2>Ejemplo: Carga de Datos Asíncrona</h2>
      {loading ? <p>Cargando datos...</p> : <p>Dato recibido: {data}</p>}
      <hr />
      <p>En este ejemplo:</p>
      <ul>
        <li>
          Usamos <code>useEffect</code> para simular la carga de datos desde una
          API cuando el componente se monta.
        </li>
        <li>
          El array de dependencias <code>[]</code> asegura que el efecto se
          ejecute solo una vez después del renderizado inicial.
        </li>
        <li>
          Se muestra un mensaje de "Cargando datos..." mientras la operación
          asíncrona está en progreso.
        </li>
        <li>
          La función de limpieza (el <code>return</code> dentro de{" "}
          <code>useEffect</code>) se ejecutaría si el componente se desmontara,
          útil para cancelar tareas pendientes.
        </li>
      </ul>
    </div>
  );
};
