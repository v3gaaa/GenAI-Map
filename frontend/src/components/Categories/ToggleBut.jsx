import "./togglebut.css";

const ToggleBut = ({ setList }) => {
  return (
    <>
      <div
        className="rounded-full border-white border relative hover:border-2 text-white text-sm w-16 h-8 z-10 flex items-center justify-center cursor-pointer"
        onClick={setList}
      >
        <div className="button b2" id="button-10">
          <input type="checkbox" className="checkbox" />
          <div className="knobs">
            <span>List</span>
          </div>
          <div className="layer"></div>
        </div>
      </div>
    </>
  );
};

export default ToggleBut;
