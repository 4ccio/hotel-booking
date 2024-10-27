const MainForm = () => {
  return (
    <form>
      <div className="grid max-w-4xl grid-cols-2 gap-3 font-nunito lg:grid-cols-12">
        <div className="col-span-2 lg:col-span-4">
          <div className="relative w-full">
            <input
              type="text"
              id="destination"
              placeholder=" "
              className="peer w-full rounded-lg border-0 bg-inherit p-4 pt-6 text-lg placeholder-transparent backdrop-blur-xl focus:ring-0"
            />
            <label
              htmlFor="destination"
              className="peer-focus:text-md absolute left-4 top-3 text-gray-200 duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:left-3 peer-focus:top-[-0.6rem]"
            >
              Город или страна
            </label>
            {/* <div className="absolute left-0 top-3 w-full border-t-2 border-transparent transition-all duration-200 peer-focus:border-[#18ffff]"></div> */}
          </div>
        </div>
        <div className="lg:col-span-2">
          <label>
            <span>Заезд</span>
            <input className="w-full py-3 text-lg" type="date"></input>
          </label>
        </div>
        <div className="lg:col-span-2">
          <label>
            <span>Выезд</span>
            <input className="w-full py-3 text-lg" type="date"></input>
          </label>
        </div>
        <div className="col-span-1 block lg:col-span-2">
          <label>
            <span>Гости</span>
            <input
              className="w-full py-3 text-lg"
              type="number"
              min="1"
            ></input>
          </label>
        </div>
        <div className="col-span-1 flex flex-grow items-end lg:col-span-2">
          <button className="w-full rounded-lg bg-teal-600 p-3">Найти</button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
