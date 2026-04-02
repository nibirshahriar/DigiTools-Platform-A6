 import './App.css'
import Banner from './components/Banner/Banner'
import Mainbanner from './components/Banner/MainBanner/Mainbanner'
import Navbar from './components/Navbar/Navbar'

const getProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productPromise = getProducts(); 

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Mainbanner productPromise={productPromise} />
    </>
  );
}

export default App
