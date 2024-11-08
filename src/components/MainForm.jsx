const MainForm = () => {
  return (
    // TODO: переделать форму через map()
    <form>
      <div className="grid max-w-5xl grid-cols-6 gap-5 font-nunito xl:max-w-7xl xl:grid-cols-12">
        <div className="col-span-6 xl:col-span-3">
          <div>
            <label htmlFor="destination" className="ml-2.5">
              <span className="text-white">Место назначения</span>
            </label>
            <input
              id="destination"
              placeholder="Город или страна"
              className="w-full rounded-lg border-[3px] border-transparent bg-white/60 py-3 placeholder-zinc-700 backdrop-blur-sm focus:border-zinc-700 focus:bg-white/75 focus:ring-0"
              type="text"
            ></input>
          </div>
          {/* <div className="relative w-full">
            <input
              type="text"
              id="destination"
              placeholder=" "
              className="peer w-full rounded-lg border-0 bg-inherit p-4 pt-6 text-lg placeholder-transparent backdrop-blur-xl focus:border-none focus:ring-0"
            />
            <label
              htmlFor="destination"
              className="absolute left-4 top-3 cursor-text text-gray-400 duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:left-4 peer-focus:top-[-1.6rem] peer-focus:z-10 peer-focus:bg-transparent peer-focus:text-base peer-focus:text-gray-100"
            >
              Город или страна
            </label>
          </div> */}
        </div>
        <div className="col-span-3 xl:col-span-2">
          <label htmlFor="checkin" className="ml-2.5">
            <span className="text-white">Заезд</span>
            <input
              id="checkin"
              className="w-full rounded-lg border-[3px] border-transparent bg-white/60 py-3 placeholder-zinc-700 backdrop-blur-sm focus:border-zinc-700 focus:bg-white/75 focus:ring-0"
              type="date"
            ></input>
          </label>
        </div>
        <div className="col-span-3 xl:col-span-2">
          <label htmlFor="checkout" className="ml-2.5">
            <span className="text-white">Выезд</span>
          </label>
          <input
            id="checkout"
            className="w-full rounded-lg border-[3px] border-transparent bg-white/60 py-3 placeholder-zinc-700 backdrop-blur-sm focus:border-zinc-700 focus:bg-white/75 focus:ring-0"
            type="date"
          ></input>
        </div>
        <div className="col-span-3 block xl:col-span-2">
          <label htmlFor="guests" className="ml-2.5">
            <span className="text-white">Гости</span>
          </label>
          <input
            id="guests"
            className="w-full rounded-lg border-[3px] border-transparent bg-white/60 py-3 placeholder-zinc-700 backdrop-blur-sm focus:border-zinc-700 focus:bg-white/75 focus:ring-0"
            type="number"
            min="1"
            placeholder="Взрослые"
          ></input>
        </div>
        <div className="col-span-3 block xl:col-span-2">
          <label htmlFor="guests" className="ml-2.5">
            <span className="text-white">Гости</span>
          </label>
          <input
            id="guests"
            className="w-full rounded-lg border-[3px] border-transparent bg-white/60 py-3 placeholder-zinc-700 backdrop-blur-sm focus:border-zinc-700 focus:bg-white/75 focus:ring-0"
            type="number"
            min="1"
            placeholder="Дети"
          ></input>
        </div>
        <div className="col-span-6 flex flex-grow items-end xl:col-span-1">
          <button className="w-full rounded-lg bg-zinc-300 py-4">Найти</button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
