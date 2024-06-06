import star from "../../assets/starLogo.svg";
import spaceShip from "../../assets/SS.gif";
import { useState, useEffect } from "react";
import noImage from "../../assets/noImage.png";
import downloadImg from "../../assets/download.svg";
import Planet from "../planetcomponents/Planet";

const Lista = ({ category , setContent}) => {
  const [hovered, setHovered] = useState(null);
  const [AIs, setAIs] = useState([]);

  const handleIa = () => {
    setContent("llm");
  }
  const fetchAIs = async () => {
    const response = await fetch("http://localhost:8000/api/ais");
    const data = await response.json();
    setAIs(data);
    console.log(data);
  };
  useEffect(() => {
    fetchAIs();
  }, []);

  const ias = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGy73gh8WnwWXLKPxapWV_nfg7NUjpFxJwcg&s",
      name: "chatpgt",
      description: "ia de texto de OpenAI",
      category: "text",
      stars: 1,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 3,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGy73gh8WnwWXLKPxapWV_nfg7NUjpFxJwcg&s",
      name: "chatpgt",
      description: "ia de texto de OpenAI",
      category: "text",
      stars: 4,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 2,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGy73gh8WnwWXLKPxapWV_nfg7NUjpFxJwcg&s",
      name: "chatpgt",
      description: "ia de texto de OpenAI",
      category: "text",
      stars: 3,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimWh_4kaYo_gZpVUBmTKF4bUEK9E8FkqbBA&s",
      name: "copilot",
      description: "ia de texto de Microsoft",
      category: "text",
      stars: 5,
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center align-center overflow-auto">
        <div className="w-full h-20 flex justify-center items-center text-3xl text-white my-5">
          <div className="w-1/12 h-full">
            <Planet surface={"p5.jpg"} />
          </div>
          {/* <Planet surface={"p1.jpg"} /> */}
          <p>{category}</p>
        </div>
        <div className="flex justify-start w-11/12 place-self-center text-center text-white">
          <p
            className="font-light text-sm text-center "
            style={{ width: "3%" }}
          >
            Logo
          </p>
          <p className="font-light text-sm text-center w-1/6 ">Name</p>
          <p className="font-light text-sm text-center w-5/12">Description</p>
          <p className="font-light text-sm text-center w-3/12">Category</p>
          <p className="font-light text-sm text-center w-1/12 ml-auto">Stars</p>
          <p className="font-light text-sm text-center w-1/12 ml-auto">
            Downloads
          </p>
        </div>

        <div className="w-full h-full flex flex-col items-center content-start overflow-auto">
          {AIs.map((ia, idx) => (
            <div
              key={idx}
              className="w-11/12 h-16 m-2 p-1 flex flex-row items-center justify-start rounded-full border-white border-2 text-white hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-blue-500 cursor-pointer"
              onMouseEnter={() => {
                setHovered(idx);
              }}
              onMouseLeave={() => {
                setHovered(null);
              }}
              onClick={handleIa}
            >
              <div className="h-full w-auto aspect-square rounded-full flex justify-center mx-1">
                {hovered === idx ? (
                  <img src={spaceShip} alt={ia.name} className="h-5/6 w-full" />
                ) : (
                  <img
                    src={ia.logo === null ? noImage : ia.logo}
                    alt={ia.name}
                    className="h-full w-full rounded-full"
                  />
                )}
              </div>
              <p className="w-1/6 text-center">{ia.name}</p>
              <p className="w-5/12 text-center">{ia.description}</p>
              <p className="w-3/12 text-center">{ia.category}</p>
              <div className="h-full w-1/12 rounded-full flex flex-row justify-end items-center ">
                <p className="flex text-center align-middle">{ia.stars}</p>
                <img
                  src={star}
                  alt="star"
                  className="h-2/3 aspect-square ml-2"
                />
              </div>
              <div className="h-full w-1/12 rounded-full flex flex-row justify-end items-center  ">
                <p className="flex text-center align-middle">{ia.downloads}</p>
                <img
                  src={downloadImg}
                  alt="star"
                  className="h-2/3 aspect-square ml-2 mr-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lista;
