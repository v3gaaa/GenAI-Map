import PlanetContainer from "../planetcomponents/PlanetContainer";
import Planet from "../planetcomponents/Planet";
import MyCarousel from "../planetcomponents/MyCarousel";

const Home = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%", // Adjust height as needed
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PlanetContainer surface={"sun.jpg"} />
        <MyCarousel />
      </div>
    </>
  );
};

export default Home;
