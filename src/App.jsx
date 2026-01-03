import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import LayoutTV from "./layouts/LayoutTV";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import VideoOne from "./pages/VideoTv1";
import VideoTwo from "./pages/VideoTv2";

export default function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
          <Route element={<LayoutTV />}>
            <Route path="/tv1" element={<VideoOne />} />
            <Route path="/tv2" element={<VideoTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
