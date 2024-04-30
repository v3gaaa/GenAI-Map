import "./MenuBar.css";

const MenuBar = () => {
  const styleButton =
    "w-1/6 h-1/2 flex items-center justify-center transition transform hover:-translate-y-1 hover:scale-110 mt-2 cursor-pointer";
  return (
    <>
      <div
        className="w-full flex flex-row justify-around items-center text-xs font-light text-white place-items-stretch px-15 cursor-pointer"
        style={{ height: "8%" }}
        id="menuBar"
      >
        <div className={styleButton}>Home</div>
        <div className={styleButton}>Categorias</div>
        <div className="w-1/6 h-1/2 flex items-center justify-center text-lg font-normal transition transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
          AI Universe
        </div>
        <div className={styleButton}>LLM</div>
        <div className={styleButton}>Cursos</div>
      </div>
    </>
  );
};

export default MenuBar;
