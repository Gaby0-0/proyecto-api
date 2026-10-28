type props = {
  pokemon: any; 
  pokemon_fav: boolean;
  guardado: boolean;
  es_fav: () => void;
  esta_guardado: () => void;
};


export default function CartaPokemon
({ pokemon,
pokemon_fav,
guardado, 
es_fav, 
esta_guardado 
}: props) {
     return (
    <article className="carta-pokemon">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <small>#{pokemon.id}</small>
      <h3>{pokemon.name}</h3>

      <div className="types">
        {pokemon.types.map(({ type }: any) => (
          <span key={type.name}>{type.name}</span>
        ))}
      </div>

      <div className="actions">
        <button onClick={es_fav}>
          {pokemon_fav ? <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            favorite
          </span> : 
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            favorite
          </span>} Favorito
        </button>

        <button onClick={esta_guardado}>
          {guardado ? 
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              save
            </span> : 
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
              save
            </span>} Guardar
        </button>
      </div>
    </article>
  );
}