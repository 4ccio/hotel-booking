const MainForm = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="flex justify-center">
        <form>
          <div className="grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-12">
            <div className="col-span-2 block lg:col-span-4">
              <label>
                <span>Место назначения</span>
                <input
                  className="w-full"
                  placeholder="Город или страна"
                ></input>
              </label>
            </div>
            <div className="lg:col-span-2">
              <label>
                <span>Заезд</span>
                <input className="w-full" type="date"></input>
              </label>
            </div>
            <div className="lg:col-span-2">
              <label>
                <span>Выезд</span>
                <input className="w-full" type="date"></input>
              </label>
            </div>
            <div className="col-span-1 block lg:col-span-2">
              <label>
                <span>Гости</span>
                <input className="w-full" type="number" min="0"></input>
              </label>
            </div>
            <div className="col-span-1 flex flex-grow items-end lg:col-span-2">
              <button className="w-full rounded-lg bg-teal-600 p-3">
                Найти
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainForm;
