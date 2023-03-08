import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://m.media-amazon.com/images/I/81GfR1Bp0NL._SX3000_.jpg"
            alt=""
          />
          <div className="home_row">
            <Product
              id={Date.now() + "title" + Math.random()}
              title="Safari Bag"
              price={159}
              rating={3}
              image=" https://m.media-amazon.com/images/I/81KEKEDFUcL._SY550_.jpg"
            />
            <Product
              id={Date.now() + "title" + Math.random()}
              title="The lean StartUp"
              price={299}
              rating={2}
              image="https://d.gr-assets.com/books/1333576876l/10127019.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id={Date.now() + "title" + Math.random()}
              title="Hair Drier Phlipes "
              price={139}
              rating={4}
              image="https://m.media-amazon.com/images/I/51FGbb3EbgL._SY450_.jpg"
            />
            <Product
              id={Date.now() + "title" + Math.random()}
              title="Boat Smart Watch"
              price={50}
              rating={1}
              image="https://m.media-amazon.com/images/I/61akt30bJsL._SY355_.jpg"
            />
            <Product
              id={Date.now() + "title" + Math.random()}
              title="Realme Narzo 50"
              price={499}
              rating={3}
              image="https://m.media-amazon.com/images/I/81gRC3KTeaL._SX569_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id={Date.now() + "title" + Math.random()}
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
              price={1000}
              rating={4}
              image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX450_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
