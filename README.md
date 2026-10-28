# Pokédex con PokéAPI

Aplicación hecha con Next.js y TypeScript que consume la PokéAPI y muestra un listado de Pokémon en tarjetas, con paginación y la opción de marcar favoritos.

## Cómo correr el proyecto

1. Instalar dependencias:
   npm install
2. Iniciar el servidor de desarrollo:
   npm run dev
3. Abrir http://localhost:3000 en el navegador.

## API utilizada

PokéAPI (https://pokeapi.co). Usé el endpoint `/pokemon` con `limit` y `offset` para la paginación de 12 en 12, y después consulto la URL de cada Pokémon para obtener su imagen y sus tipos.

## Decisiones que tomé

- Usé `useState` para guardar la sección seleccionada (Inicio, Favoritos y Guardados) y la página actual. Así, cuando el usuario cambia de sección o de página, el cambio se refleja en pantalla.
- Usé `useEffect` para volver a pedir los datos a la API cada vez que cambia la página.
- Separé la navegación y la tarjeta de cada Pokémon en componentes propios (`navegacion.tsx` y `carta_pokemon.tsx`) para que `page.tsx` no quedara tan cargado.
- Los estilos están en `globals.css` con media queries para que se vea bien en celular y en escritorio.

## Qué no alcancé a terminar y por qué

Por falta de tiempo, y porque todavía no conozco cómo implementar algunas de las funcionalidades que pide el ejercicio, quedaron pendientes:

- **Página y búsqueda en la URL:** la página actual vive en `useState` y no en la URL, así que al recargar regresa a la primera página. No implementé la búsqueda con debounce.
- **Página de detalle:** todavía no sé cómo crear rutas dinámicas en Next.
- **Zustand:** en cuanto al concepto estoy en ceros. Los favoritos se guardan con `useState` en la página, por lo que no se conservan al recargar y solo se filtran dentro de la página actual.
- **Axios:** no sé exactamente cómo implementarlo y me falta entender para qué sirve frente a `fetch`, que es lo que usé. Por lo mismo todavía hay tipos `any` en el código.
- **Componentes de servidor y de cliente:** toda la página es de cliente (`"use client"`), porque todavía no tengo claro cuándo conviene que algo sea de servidor.

Lo que más me gustaría reforzar es Zustand, Axios.

## Nota sobre el uso de IA

Utilicé un agente de IA para ayudarme a redactar este README, a partir de lo que yo le expliqué sobre mi proyecto y lo que me falta aprender. El contenido refleja mi situación real.