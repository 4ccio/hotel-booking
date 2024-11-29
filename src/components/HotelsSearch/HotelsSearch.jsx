import MainForm from "@/components/HotelsSearch/MainForm";

const HotelsSearch = () => {
  return (
    <section className="relative mb-5 h-[480px] bg-form-bg bg-cover bg-center bg-no-repeat lg:h-[550px]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <MainForm></MainForm>
      </div>
    </section>
  );
};

export default HotelsSearch;
