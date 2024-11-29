import { useEffect, useState } from "react";
import useScreenSize from "@/shared/hooks/useScreenSize";
import setInitialCardsNumber from "@/components/PopularDestinations/setVisibleItemsByScreenWidth";
import DestinationCard from "@/components/PopularDestinations/DestinationCard";
import H2 from "@/shared/UI/H2";
import { DESTINATIONS as destinations } from "@/components/PopularDestinations/destintaions";

const PopularDestinations = () => {
  const { width } = useScreenSize(); // получаем текущую ширину экрана
  const [initialLimit, setInitialLimit] = useState(
    setInitialCardsNumber(width),
  ); // состояние количества изначально видимых карточек на основе ширины экрана пользователя
  const [visibleCards, setVisibleCards] = useState(initialLimit); // состояние количества отображаемых карточек на данный момент (меняется по кнопке)

  useEffect(() => {
    setInitialLimit(() => setInitialCardsNumber(width)); // обновляем количество показанных изначально карточек, если меняется ширина экрана
    // сбрасываем количество отображаемых карточек на данный момент при изменении ширины экрана
    setVisibleCards(() => setInitialCardsNumber(width));
  }, [width]);

  // функция для изменения числа отображаемых карточек, увеличивается каждый раз на изначальное число показанных карточек
  const showMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + initialLimit);
  };

  // вернуть количество отображаемых карточек к изначальному количеству
  const hideAllCards = () => {
    setVisibleCards(initialLimit);
  };

  return (
    <section className="mb-5">
      <div className="container mx-auto w-full">
        <div className="mb-3">
          <H2>Популярные направления</H2>
        </div>
        <div className="mb-5 grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {destinations.slice(0, visibleCards).map((item, index) => {
            return (
              <div
                className="h-48 w-full max-w-96 rounded-lg shadow-md shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-300"
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
        <div className="flex items-center justify-center gap-3">
          <div className="w-full border-b-2 border-zinc-300"></div>
          {visibleCards < destinations.length ? (
            <button
              onClick={showMoreCards}
              className="w-full max-w-52 text-nowrap rounded-md border-2 border-solid border-zinc-500 bg-transparent px-2 py-2 text-zinc-900 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-200"
            >
              Показать ещё
            </button>
          ) : (
            <button
              onClick={hideAllCards}
              className="w-full max-w-52 text-nowrap rounded-md border-2 border-solid border-zinc-500 bg-transparent px-2 py-2 text-zinc-900 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-200"
            >
              Скрыть
            </button>
          )}
          <div className="w-full border-b-2 border-zinc-300"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
