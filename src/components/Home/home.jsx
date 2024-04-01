import car from "../../assets/iconos/car.svg";
import "./home.css";
import {bussinessName} from "../../options.ts"

const Home = () => {
  return (
    <div className="home">
      <div className="Home-text">
        {bussinessName}-Tu solución completa para vehículos en movimiento.
      </div>
      <img src={car} alt="car" className="Home-carImagen" />
    </div>
  );
};
export default Home;
