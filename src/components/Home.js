import React from "react";
import Navbar from "./Navbar";
import Canvas from "./Canvas";
import Footer from "./Footer";

import Toolbox from "./Toolbox";

const Home = () => {
    return (
      <>
      <div>
        <Navbar />
      
        <div className="hi">
          <div className="contain">
          
          {/* <ColumnCardGrid /> */}
          <Canvas />
        
      
          
          </div>
        </div>
        <Footer/>
      </div>
        {/* <section className="hero-section">
          <p>Subscribe to </p>
          <h1>Thapa Technical Home Page</h1>
        </section> */}
      </>
      
      
    );
  };
  export default Home;

