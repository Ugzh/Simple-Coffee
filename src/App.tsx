import Cards from "./components/Cards.tsx";
import VectorLine from "./assets/img/vector.svg";

function App() {
  return (
    <div className="max-w-[1280px] flex justify-center mx-auto mt-52 md:mt-32 max-[640px]:mt-24 sm:mt-24">
      <div className="bg-[#1B1D1F] w-full  flex flex-col rounded-xl md:mx-16 xl:mx-0 max-[640px]:mx-8 sm:mx-8">
        <div className="flex flex-col w-full items-center pt-16 mb-8 relative">
          <h1 className="font-DMsans text-3xl z-[1]">Our Collection</h1>
          <p className="font-DMsans flex justify-center items-center w-1/3 text-[#6F757C] text-center mt-4 z-[1] max-[640px]:w-2/3">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly
          </p>
          <img
            src={VectorLine}
            alt="Vector design"
            className="absolute left-1/2 top-6 h-1/2 z-0 max-[640px]:hidden"
          />
        </div>
        <div className="flex justify-center items-center gap-8 mb-8">
          <a className="bg-[#6F757C] px-3 py-2 rounded-lg" href="#">
            All Products
          </a>
          <a href="#">Available now</a>
        </div>
        <div className="w-full flex justify-center">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
