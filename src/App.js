import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home";
import TopNavbar from "./components/Navbar";
import SecondPage from "./pages/SecondPage";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/add"
          element={<SecondPage />}
        />
      </Routes>
    </Router>

  );
}

export default App;
