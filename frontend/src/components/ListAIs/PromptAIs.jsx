import { div } from "three/examples/jsm/nodes/Nodes.js";
import MenuBar from "../MenuBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import spaceShip from "../../assets/SS.gif";
import noImage from "../../assets/noImage.png";

const PromptAIs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { names, descriptionPrompt } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [AIs, setAIs] = useState([]);
  const [matchingAIs, setMatchingAIs] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [cat, setCat] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAISelected = (ia) => {
    console.log(ia);
    navigate("/ai", { state: { ai: ia } });
  };

  const fetchAIs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/ais");
      const data = await response.json();

      const filteredAIs = data.filter((ai) => names.includes(ai.name));
      setMatchingAIs(filteredAIs);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAIs();
  }, []);

  return (
    <>
      <MenuBar>
        <div className="h-full w-full flex flex-col justify-center align-center overflow-auto">
          <div className="w-5/6 h-1/3 flex justify-center items-center text-lg text-white my-5 relative z-50 text-justify align-center self-center border border-white rounded-xl p-10">
            {descriptionPrompt}
          </div>
          <div className="flex justify-start w-11/12 place-self-center text-center text-white z-10">
            <p
              className="font-light text-sm text-center"
              style={{ width: "3%" }}
            >
              Logo
            </p>
            <p className="font-light text-sm text-center w-1/6">Name</p>
            <p className="font-light text-sm text-center w-5/12">Description</p>
            <p className="font-light text-sm text-center w-2/12">Category</p>
            <p className="font-light text-sm text-center w-2/12 ml-auto">
              Price
            </p>
            <p className="font-light text-sm text-center w-1/12 ml-auto">
              Rating
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center content-start overflow-auto relative z-10 text-white">
            {/* {matchingAIs.map((ai) => (
              <div className="text-white text-xl" key={ai.id}>
                {ai.name}
                {ai.description}
              </div>
            ))} */}
            {loading ? (
              <div className="w-full h-full text-white flex justify-center items-center">
                Loading...
              </div>
            ) : (
              matchingAIs.map((ia, idx) => (
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
              ))
            )}
          </div>
        </div>
      </MenuBar>
    </>
  );
};

export default PromptAIs;
