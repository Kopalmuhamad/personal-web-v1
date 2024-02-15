import "./App.scss";
import Navbar from "./components/fragments/Navbar/Navbar";

import Layout from "./components/fragments/Layout/Layout";

import splashPink from "./assets/icons/splash-pink.png";
import Header from "./components/fragments/Header/Header";
import Services from "./components/fragments/Services/Services";

function App() {
  return (
    <>
      <img src={splashPink} alt="" className="splash-pink" />
      <Navbar />
      <Layout>
        <Header />
        <Services />
      </Layout>
      <img src={splashPink} alt="" className="splash-pink" />
    </>
  );
}

export default App;
