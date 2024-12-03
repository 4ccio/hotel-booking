import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="search-result" element={<SearchResultPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
