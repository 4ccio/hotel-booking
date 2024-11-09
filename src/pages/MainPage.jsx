import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import DestinationCard from "../components/DestinationCard";
import MainForm from "../components/MainForm";
import NavBar from "../components/NavBar";
import setInitialCardsNumber from "../helpers/setVisibleItemsByScreenWidth";
import { DESTINATIONS as destinations } from "../config/destintaions";

const MainPage = () => {
  const { width } = useScreenSize();
  const [initialLimit, setInitialLimit] = useState(
    setInitialCardsNumber(width),
  );
  const [visibleCards, setVisibleCards] = useState(initialLimit);

  useEffect(() => {
    setInitialLimit(() => setInitialCardsNumber(width));
    // setVisibleCards(() => setInitialCardsNumber(width)); // change initialy visible cards before button clicked if user changed screen,
  }, [width]);

  const showMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + initialLimit);
  };

  return (
    <>
      <NavBar></NavBar>
      <section className="mb-7 h-[480px] bg-form-bg bg-cover bg-center bg-no-repeat lg:h-[550px]">
        <div className="flex h-full items-center justify-center bg-black/30 px-6 py-6 backdrop-blur-sm">
          <MainForm></MainForm>
        </div>
      </section>
      <section>
        <div className="container mx-auto w-full">
          <div className="mb-3">
            <h2 className="text-center text-lg font-medium sm:text-left lg:text-xl">
              Популярные направления
            </h2>
          </div>
          <div className="grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {destinations.slice(0, visibleCards).map((item, index) => {
              return (
                <div
                  className="w-full max-w-96 rounded-lg shadow-md shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-300"
                  key={index}
                >
                  <DestinationCard
                    imgUrl={item.imgUrl}
                    city={item.city}
                    country={item.country}
                    price={item.price}
                  ></DestinationCard>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="w-full border-b-2 border-zinc-300"></div>
            <button
              onClick={showMoreCards}
              className="w-full max-w-52 text-nowrap rounded-md border-2 border-solid border-zinc-500 bg-transparent px-4 py-2 text-zinc-900 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-200"
            >
              Показать ещё
            </button>
            <div className="w-full border-b-2 border-zinc-300"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
