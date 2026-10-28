
"use client";
import Navegacion from "./componentes/navegacion";
import { useEffect, useState } from "react";
import CartaPokemon from "./componentes/carta_pokemon";

export default function Page() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [guardados, setGuardados] = useState<number[]>([]);
  const [pantalla, setPantalla] = useState("Inicio");
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${pagina * 12}`)
      .then((res) => res.json())
      .then(async (data) => {
        const detalles = await Promise.all(
          data.results.map((p: any) =>
            fetch(p.url).then((res) => res.json())
          )
        );

        setPokemon(detalles);
      });
  }, [pagina]);

  function alternarFavorito(id: number) {
    setFavoritos((lista) =>
      lista.includes(id)
        ? lista.filter((n) => n !== id)
        : [...lista, id]
    );
  }

  function alternarGuardado(id: number) {
    setGuardados((lista) =>
      lista.includes(id)
        ? lista.filter((n) => n !== id)
        : [...lista, id]
    );
  }

  const mostrar = pokemon.filter((p) =>
    pantalla === "Favoritos"
      ? favoritos.includes(p.id)
      : pantalla === "Guardados"
      ? guardados.includes(p.id)
      : true
  );

  return (
    <main>
      <h1>Pokédex</h1>

      
<Navegacion
  pantalla={pantalla}
  cambiarPantalla={setPantalla}
/>


      <section className="lista-pokemon">
        {mostrar.map((p) => (
          <CartaPokemon
            key={p.id}
            pokemon={p}
            pokemon_fav={favoritos.includes(p.id)}
            guardado={guardados.includes(p.id)}
            es_fav={() => alternarFavorito(p.id)}
            esta_guardado={() => alternarGuardado(p.id)}
          />
        ))}
      </section>

      {pantalla === "Inicio" && (
        <div>
          <button
            disabled={pagina === 0}
            onClick={() => setPagina(pagina - 1)}
          >
            Anterior
          </button>

          <button onClick={() => setPagina(pagina + 1)}>
            Siguiente
          </button>
        </div>
      )}
    </main>
  );
}
