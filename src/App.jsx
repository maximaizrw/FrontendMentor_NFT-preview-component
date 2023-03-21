import ImgEquilibrium from "./assets/images/image-equilibrium.jpg";
import Avatar from "./assets/images/image-avatar.png";
import IconView from "./assets/images/icon-view.svg";
import IconEth from "./assets/images/icon-ethereum.svg";
import IconClock from "./assets/images/icon-clock.svg";

const App = () => {
  return (
    <div className="h-screen bg-neutral-dark-blue-1 flex items-center justify-center font-sans">
      <div className="bg-neutral-dark-blue-2 p-4 rounded-xl w-64">
        <div className="mb-4 relative">
          <img
            src={ImgEquilibrium}
            alt="Imagen Equilibrium"
            className="rounded-xl"
          />
          <div className="absolute rounded-xl top-0 left-0 w-full h-full group hover:bg-primary-cyan hover:bg-opacity-50 transition-colors duration-500 ease-in-out cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={IconView}
                className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <h1 className="text-neutral-white cursor-pointer hover:text-primary-cyan">
            Equilibrium #3429
          </h1>
          <p className="text-primary-soft-blue font-light text-sm">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-x-2">
              <img src={IconEth} className="h-4"/>
              <p className="text-primary-cyan">0.041 ETH</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={IconClock} className="h-4" />
            <p className="text-primary-soft-blue font-light">3 days left</p>
            </div>
            
          </div>
          <hr className="border-neutral-dark-blue-3" />
          <div className="flex gap-x-4 items-center">
            <img
              src={Avatar}
              alt="Imagen avatar"
              className="h-6 border border-neutral-white rounded-full"
            />
            <p className="text-sm text-primary-soft-blue font-light">
              Creation of{" "}
              <span className="text-neutral-white font-light cursor-pointer hover:text-primary-cyan">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
