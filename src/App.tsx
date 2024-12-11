import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import TopSeller from "./Components/TopSeller";
import PopularBlogs from "./Components/PopularBlogs";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex h-screen">
        <SideBar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path={"/"} element={<MainContent />} />
            <Route path={"/product/:id"} element={<ProductPage />} />
          </Routes>
          <div>
            <TopSeller />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
}
