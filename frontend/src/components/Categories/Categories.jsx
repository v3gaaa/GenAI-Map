import PlanetContainer from "../planetcomponents/PlanetContainer";
import RocketButton from "./rocketButton";
import "./Categories.css";
import Planet2Container from "../planetcomponents/Planet2Container";
import CatCarousel from "./catCarousel";
import Planet from "../planetcomponents/Planet";



const Category = ({text , href , Category}) => {
  return (
    <>
        <div className="main-container">
            <div className="container-up">
                <CatCarousel />
            </div>

            <div className="container-down">
              <div className="down">
                <div className="down-1">
                  <RocketButton text={text} href={href} />
                </div>
                <div className="down-2">
                  <Planet surface={Category} />
                </div>
                <div className="down-3">
                  <RocketButton text={text} href={href} />
                </div>
              </div>
                
            </div>
        </div>
    </>
  );
};

export default Category;
