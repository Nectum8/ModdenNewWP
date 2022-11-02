import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forum from  './pages/Forum';
import HomeP from  './pages/HomePage';

const HomePA = () => {
  return (<>
    <Navbar />
    <div className="container mx-auto min-h-screen">
      <HomeP />
    </div>
  </>)
};

const ForumPA = () => {
  return (<>
    <Navbar />
    <div className="container mx-auto min-h-screen">
      <Forum />
    </div>
  </>)
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ForumPA />} />
        <Route path="/home" element={<HomePA />} />
      </Routes>
    </BrowserRouter>
  )
};


export default App;