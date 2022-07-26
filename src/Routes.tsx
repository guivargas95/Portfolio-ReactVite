import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import MainNavbar from "./components/mainNavbar";
  import Index from "./pages";
  import Page1 from "./pages/Page1";
  import Page2 from "./pages/Page2";
  
  export function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    )
  }