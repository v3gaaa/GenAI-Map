import PlanetContainer from "../planetcomponents/PlanetContainer";
import RocketButton from "./rocketButton";
import "./indiv.css";
import Planet2Container from "../planetcomponents/Planet2Container";
import CatCarousel from "./catCarousel";
import Planet from "../planetcomponents/Planet";

const slides = [
  { name: 'OpenAI', title: 'ChatGPT', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png' },
  { name: 'Google', title: 'Gemini', imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1200.format-webp.webp' },
  { name: 'Microsoft', title: 'Copilot', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/800px-Microsoft_365_Copilot_Icon.svg.png' },
  // Agrega más objetos aquí para más slides
];

const Indiv = ({Category}) => {
  return (
    <>
        <div className="main-container">
            <div className="container-up">
                <div className="up-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"/>
                    <h1 className="text-6xl text-white pb-5">{Category}</h1>
                </div>
                <div>
                    <p className="text-l text-white pb-5">ChatGPT es un modelo de lenguaje basado en la arquitectura GPT (Generative Pre-trained Transformer) desarrollado por OpenAI. Es parte de una familia de modelos de inteligencia artificial (IA) diseñados para generar texto en lenguaje natural. Aquí tienes un resumen de su tecnología y funcionalidad:</p>
                </div>
            </div>

            <div className="container-down">
              <div className="down">
                <div className="down-1">
                  <div>
                    <h2 className="text-white text-xl ml-[-60%]">Anterior</h2>
                  </div>
                  <div className="down-1-in hover:scale-105">
                    <Planet surface={Category} />
                  </div>
                </div>
                <div className="down-2 w-3/5 h-auto aspect-square top-1/4 transition transform hover:-translate-y-1 hover:scale-105">
                  <Planet surface={Category} />
                </div>
                <div className="down-3">
                  <div>
                  <h2 className="text-white text-xl mr-[-60%]">Siguiente</h2>
                  </div>
                  <div className="down-3-in hover:scale-105">
                    <Planet surface={Category} />
                  </div>
                </div>
              </div>
                
            </div>
        </div>
    </>
  );
};

export default Indiv;
