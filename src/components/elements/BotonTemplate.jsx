import { Icon } from "@iconify/react";

function Boton({ Icono, texto, laAccion, addClass }) {

  return (
    <button
      onClick={laAccion}
      className={`flex items-center gap-2 px-4 py-1 rounded-xl  text-white w-fit mx-auto text-sm ${addClass}`}>
      <Icon icon={Icono} width="24" height="24" />
      {texto}
    </button>
  )
}

export default Boton