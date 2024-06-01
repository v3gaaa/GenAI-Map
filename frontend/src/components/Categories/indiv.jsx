import PlanetContainer from "../planetcomponents/PlanetContainer";
import RocketButton from "./rocketButton";
import "./indiv.css";
import Planet2Container from "../planetcomponents/Planet2Container";
import CatCarousel from "./catCarousel";
import Planet from "../planetcomponents/Planet";
import Rankings from "./rankings";

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
                <Rankings />
            </div>

            <div className="container-down">
              <div className="down">
                <div className="down-1">
                  <RocketButton text={"Recursos"} />
                </div>
                <div className="downn-2">
                  <RocketButton text={"Proyectos"} />
                </div>
                <div className="down-3">
                  <RocketButton text={"Docs"} />
                </div>
              </div>
                
            </div>
        </div>
    </>
  );
};

export default Indiv;
