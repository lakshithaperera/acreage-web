import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";
import ScrollToTop from './ScrollToTop';
import Survey from "./pages/survey/Survey";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <>
    <ScrollToTop>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="join-to-mailing-list" element={<SignIn />}></Route>
    <Route path="survey" element={<Survey />}></Route>
    <Route path="admin" element={<Admin />}></Route>
    </Routes>
    </ScrollToTop>
    </>
  );
}

export default App;
