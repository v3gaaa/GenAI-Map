import RocketButton from "../Categories/rocketButton";
import Rankings from "../Categories/rankings";
import { useLocation } from "react-router-dom";
import MenuBar from "../MenuBar";
import "./aishown.css";

const AIShown = () => {
  const location = useLocation();
  const { ai } = location.state;

  return (
    <>
      <MenuBar>
        <div className="main-container z-0">
          <div className="container-up">
            <div className="up-1">
              <img
                src={ai.logo}
                className="h-full w-auto aspect-video rounded-lg"
              />

              <h1 className="text-6xl text-white pb-5">{ai.name}</h1>
            </div>
            <div>
              <p className="text-l text-white pb-5 text-center">
                {ai.description}
              </p>
            </div>
            <Rankings AI={ai} />
          </div>

          <div className="container-down">
            <div className="down">
              <div className="down-1">
                <RocketButton text={"Back"} cat={ai.category} />
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
      </MenuBar>
    </>
  );
};

export default AIShown;
