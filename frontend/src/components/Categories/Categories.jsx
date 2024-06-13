import PlanetContainer from "../planetcomponents/PlanetContainer";
import RocketButton from "./rocketButton";
import "./Categories.css";
import Planet2Container from "../planetcomponents/Planet2Container";
import CatCarousel from "./catCarousel";
import Planet from "../planetcomponents/Planet";
import { useState } from "react";

const slides = [
  {
    name: "OpenAI",
    title: "ChatGPT",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
  },
  {
    name: "Google",
    title: "Gemini",
    imageUrl:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1200.format-webp.webp",
  },
  {
    name: "Microsoft",
    title: "Copilot",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/800px-Microsoft_365_Copilot_Icon.svg.png",
  },
  // Agrega más objetos aquí para más slides
];

const Category = ({ AIs, text, href, category, setCategory }) => {
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
    "Vector Database",
  ];

  const handleCategoryChange = (newCategory) => {
    setCat(newCategory);
    setCategory(newCategory);
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div className="main-container">
        <div className="container-up">
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
          <CatCarousel AIs={AIs} cat={cat}/>
        </div>

        <div className="container-down">
          <div className="down">
            <div className="down-1">
              <div>
                <h2 className="text-white text-xl ml-[-60%]">Anterior</h2>
              </div>
              <div className="down-1-in hover:scale-105">
                <Planet surface={"p4.jpg"} />
              </div>
            </div>
            <div className="down-2 w-3/5 h-auto aspect-square top-1/4 transition transform hover:-translate-y-1 hover:scale-105">
              <Planet surface={"p5.jpg"} />
            </div>
            <div className="down-3">
              <div>
                <h2 className="text-white text-xl mr-[-60%]">Siguiente</h2>
              </div>
              <div className="down-3-in hover:scale-105">
                <Planet surface={"p2.jpg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
