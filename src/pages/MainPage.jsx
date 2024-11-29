import NavBar from "@/components/Navbar/NavBar";
import HotelsSearch from "../components/HotelsSearch/HotelsSearch";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import Articles from "../components/Articles/Articles";
import Footer from "@/components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <HotelsSearch />
      <PopularDestinations />
      <Articles />
      <Footer />
    </>
  );
};

export default MainPage;
