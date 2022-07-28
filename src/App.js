import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Routes/SharedLayout";

import Home from "./Routes/Home";
import Blog from "./Routes/Blog";
import EnrichmentJourney from "./Routes/EnrichmentJourney";
import TakeAction from "./Routes/TakeAction";
import WhoWeAre from "./Routes/WhoWeAre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="WhoWeARe" element={<WhoWeAre />} />
          <Route path="EnrichmentJourney" element={<EnrichmentJourney />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="TakeAction" element={<TakeAction />} />
          <Route path="*" element={<h1>401 file not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
