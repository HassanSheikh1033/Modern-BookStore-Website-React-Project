import { BrowserRouter, Route, Routes } from "react-router-dom";


// Import Pages ....................................
import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";

// Import Components ....................................
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'



export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
