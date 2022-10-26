import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add/Add";
import ContextProvider from "./components/context/GlobalContext";
import Watchlist from "./components/Watchlist.js/Watchlist";
import Watched from "./components/Watched/Watched";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />

          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
