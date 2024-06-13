import { useNavigate } from "react-router-dom";
import star from "../../assets/starLogo.svg";
import spaceShip from "../../assets/SS.gif";
import { useState, useEffect } from "react";
import noImage from "../../assets/noImage.png";
import downloadImg from "../../assets/download.svg";
import Planet from "../planetcomponents/Planet";

const Lista = ({ AIs, category, setCategory, loading }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [cat, setCat] = useState(category);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "Image",
    "Text",
    "Video",
    "Music",
    "Code",
    "Data",
    "Game",
    "Vector",
  ];

  const handleCategoryChange = (newCategory) => {
    setCat(newCategory);
    setCategory(newCategory);
    setIsDropdownOpen(false);
  };

  const handleAISelected = (ia) => {
    console.log(ia);
    navigate("/ai", { state: { ai: ia } });
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center align-center overflow-auto">
        <div className="w-full h-20 flex justify-center items-center text-3xl text-white my-5 relative z-50">
          <div className="w-1/12 h-full">
            <Planet surface={"p5.jpg"} />
          </div>
          <div className="z-50 relative">
            <p
              style={{
                display: "inline",
                cursor: "pointer",
                height: "90%",
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {cat} <span style={{ marginLeft: "10px" }}>▼</span>
            </p>
            {isDropdownOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%", // Position below the <p> element
                  left: 0,
                  backgroundColor: "gray",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "4px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  zIndex: 1000,
                }}
              >
                {categories.map((cat) => (
                  <li
                    key={cat}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                    className="hover:bg-white hover:text-black"
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat === "Music" ? "Music & Sound" : cat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-start w-11/12 place-self-center text-center text-white z-10">
          <p className="font-light text-sm text-center" style={{ width: "3%" }}>
            Logo
          </p>
          <p className="font-light text-sm text-center w-1/6">Name</p>
          <p className="font-light text-sm text-center w-5/12">Description</p>
          <p className="font-light text-sm text-center w-2/12">Category</p>
          <p className="font-light text-sm text-center w-2/12 ml-auto">Price</p>
          <p className="font-light text-sm text-center w-1/12 ml-auto">
            Rating
          </p>
        </div>

        <div className="w-full h-full flex flex-col items-center content-start overflow-auto relative z-10">
          {loading ? (
            <div className="w-full h-full text-white flex justify-center items-center">
              Loading...
            </div>
          ) : (
            AIs.filter((ai) => ai.category.includes(cat.toLowerCase())).map(
              (ia, idx) => (
                <div
                  key={idx}
                  className="w-11/12 h-20 m-2 p-1 flex flex-row items-center justify-start rounded-full border-white border-2 text-white hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-blue-500 cursor-pointer z-10"
                  onMouseEnter={() => {
                    setHovered(idx);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                  }}
                  onClick={() => handleAISelected(ia)}
                >
                  <div className="h-full w-auto aspect-square rounded-full flex justify-center mx-1 z-10">
                    {hovered === idx ? (
                      <img
                        src={spaceShip}
                        alt={ia.name}
                        className="h-5/6 w-full"
                      />
                    ) : (
                      <img
                        src={ia.logo === null ? noImage : ia.logo}
                        alt={ia.name}
                        className="h-full w-full rounded-full"
                      />
                    )}
                  </div>
                  <p className="w-1/6 text-center">{ia.name}</p>
                  <p className="w-5/12 text-center truncate text-ellipsis ">
                    {ia.description}
                  </p>
                  <p className="w-2/12 text-center">{ia.category}</p>
                  <div className="h-full w-2/12 rounded-full flex flex-row justify-center items-center">
                    <p className="flex text-center align-middle truncate hover:text-clip">
                      {ia.price}
                    </p>
                  </div>
                  <div className="h-full w-1/12 rounded-full flex flex-row justify-center items-center">
                    <p className="flex text-center align-middle">{ia.rating}</p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Lista;
