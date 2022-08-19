import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayout from "./pages/SharedLayout";
import WhoWeAre from "./pages/WhoWeAre";
import Enrichment from "./pages/Enrichment";
import Blog from "./pages/Blog";
import TakeAction from "./pages/TakeAction";
import Error from "./pages/Error";


const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/enrichment" element={<Enrichment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/takeaction" element={<TakeAction />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
