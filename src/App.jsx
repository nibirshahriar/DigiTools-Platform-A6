import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Mainbanner from "./components/Banner/MainBanner/Mainbanner";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const getProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  // console.log(carts);
  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <Mainbanner
        productPromise={productPromise}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setCarts={setCarts}
carts={carts}
      />
<ToastContainer/>
    </>
  );
}

export default App;
