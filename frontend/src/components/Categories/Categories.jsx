import PlanetContainer from "../planetcomponents/PlanetContainer";
import RocketButton from "./rocketButton";
import "./Categories.css";
import Planet2Container from "../planetcomponents/Planet2Container";
import CatCarousel from "./catCarousel";
import Planet from "../planetcomponents/Planet";

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

const Category = ({ text, href, Category }) => {
  return (
    <>
      <div className="main-container">
        <div className="container-up">
          <h1 className="text-6xl text-white pb-5">{Category}</h1>
          <CatCarousel slides={slides} />
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
