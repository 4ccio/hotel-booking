const MainForm = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="">
        <form>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <label className="col-span-2 block lg:col-span-1">
              <span>Место назначения</span>
              <input
                className="block w-full lg:max-w-64"
                placeholder="Город или страна"
              ></input>
            </label>
            <label>
              <span>Заезд</span>
              <input className="block w-full" type="date"></input>
            </label>
            <label>
              <span>Выезд</span>
              <input className="block w-full" type="date"></input>
            </label>
            <label className="col-span-2 lg:col-span-1">
              <span>Гости</span>
              <input className="block w-full" type="number"></input>
            </label>
          </div>
        </form>
      </div>

      {/* <div className="bg-form-bg h-96 w-auto bg-cover bg-no-repeat">
        <form>
          <input>
          </input>
        </form>
      </div> */}
    </div>
  );
};

export default MainForm;
