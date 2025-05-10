# Aplicación Educativa de React Hooks

Este proyecto es una aplicación interactiva diseñada para aprender y experimentar con diversos Hooks de React. La aplicación está construida con React, TypeScript y Vite, utilizando React Router para la navegación.

## Descripción del Proyecto

La aplicación presenta una interfaz con una barra lateral de navegación (sidebar) que permite seleccionar diferentes ejemplos de Hooks. El área de contenido principal muestra la implementación y el comportamiento del Hook seleccionado, permitiendo a los usuarios interactuar y entender su funcionamiento.

## Tecnologías Utilizadas

- **React:** Biblioteca principal para construir la interfaz de usuario.
- **TypeScript:** Para un desarrollo más robusto y tipado estático.
- **Vite:** Herramienta de frontend para un desarrollo rápido y eficiente.
- **React Router:** Para la gestión de rutas y navegación dentro de la aplicación.

## Hooks Cubiertos (Ejemplos)

Este proyecto cubre una variedad de Hooks de React, incluyendo pero no limitado a:

- `useState`
- `useEffect`
- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`
- `useRef`
- Hooks personalizados

## Estructura del Proyecto

- **Barra Lateral (Sidebar):** Contiene enlaces a los diferentes ejemplos de Hooks.
- **Área de Contenido:** Muestra el componente específico del Hook seleccionado, con explicaciones y ejemplos interactivos.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio (si aplica):**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd react-hooks
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador y visita `http://localhost:5173` (o el puerto que indique Vite).

4.  **Construye para producción:**

    ```bash
    npm run build
    ```

    Esto generará los archivos optimizados para producción en la carpeta `dist`.

5.  **Linting:**

    ```bash
    npm run lint
    ```

    Ejecuta ESLint para verificar el estilo y la calidad del código.

6.  **Vista previa de la build:**
    ```bash
    npm run preview
    ```
    Este comando permite previsualizar la build de producción localmente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor, abre un issue o envía un pull request.
