import logo from "@/assets/logo.svg";
import { items } from "./navItems";

const NavBar = () => {
  return (
    <nav className="container mx-auto flex w-full items-center justify-between py-3">
      <div>
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="mr-1 h-9 w-auto sm:h-12"></img>
          <span className="text-xl font-bold sm:text-2xl">myHotel</span>
        </a>
      </div>
      <div className="flex gap-3 sm:gap-5">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <a href="/">
                <div className="flex items-center gap-1 p-1">
                  <img
                    src={item.icon}
                    alt="favorite"
                    className="h-6 w-auto sm:h-6"
                  />
                  {item.name ? (
                    <span className="hidden font-nunito text-base font-semibold sm:block">
                      {item.name}
                    </span>
                  ) : null}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
