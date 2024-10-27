import MainForm from "./MainForm";
import NavBar from "./NavBar";

const MainPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className="h-[400px] bg-form-bg bg-cover bg-center bg-no-repeat lg:h-[550px]">
        <div className="flex h-full items-center justify-center bg-black/30 px-8 backdrop-blur-[4px]">
          <MainForm></MainForm>
        </div>
      </section>
    </>
  );
};

export default MainPage;
