import logo from "../assets/logo.svg";

const items = [
  {
    header: "Компания",
    children: [
      {
        name: "О нас",
        link: "/",
      },
      {
        name: "Контакты",
        link: "/",
      },
      {
        name: "Правовая информация",
        link: "/",
      },
    ],
  },
  {
    header: "Бизнесу",
    children: [
      {
        name: "Отельерам",
        link: "/",
      },
      {
        name: "Партнёрам",
        link: "/",
      },
      {
        name: "Рекламодателям",
        link: "/",
      },
    ],
  },
  {
    header: "Помощь",
    children: [
      {
        name: "FAQ",
        link: "/",
      },
      {
        name: "Поддержка",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-200 py-5 md:py-10">
      <div className="max-auto container w-full">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <div className="max-w-52 rounded-lg p-4">
            <a href="/" className="mb-2 flex items-center">
              <img
                src={logo}
                alt="logo"
                className="mr-1 h-10 w-auto sm:h-12"
              ></img>
              <span className="text-xl font-bold lg:text-2xl">myHotel</span>
            </a>
            <div className="max-w-fit font-nunito font-semibold">
              Ваш верный спутник в путешествиях!
            </div>
          </div>
          {items.map((item, index) => {
            return (
              <div key={index} className="p-4">
                <h4 className="mb-1.5 font-bold text-slate-800">
                  {item.header}
                </h4>
                {item.children.map((child, index) => {
                  return (
                    <div key={index} className="text-sm text-slate-600">
                      <a href={child.link}>
                        <span className="mb-0.5 block hover:text-slate-800">
                          {child.name}
                        </span>
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
