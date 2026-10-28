
type Props = {
  pantalla: string;
  cambiarPantalla: (nombre: string) => void;
};

export default function Navegacion({
  pantalla,
  cambiarPantalla,
}: Props) {
  const opciones = ["Inicio", "Favoritos", "Guardados"];

  return (
    <nav className="navegacion">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          className={pantalla === opcion ? "activo" : ""}
          onClick={() => cambiarPantalla(opcion)}
        >
          {opcion === "Inicio" && 
                <span className="material-symbols-outlined">
                home
                </span> 
                }
          {opcion === "Favoritos" && 
                <span className="material-symbols-outlined">
                favorite
                </span>
                }
          {opcion === "Guardados" && 
                <span className="material-symbols-outlined">
                save
                </span>}
          {" "}{opcion}
        </button>
      ))}
    </nav>
  );
}
