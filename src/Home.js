import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* products */}
          <Product
            id={1}
            title="The Lean Start up"
            price={20.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          {/* products */}
          <Product
            id={2}
            title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
            price={798.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          {/* products */}
          <Product
            id={3}
            title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
            price={49.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71bf9IpGjtL._AC_SL1500_.jpg"
          />
          {/* products */}
          <Product
            id={4}
            title="OnePlus Nord N200 | 5G Unlocked Android Smartphone U.S Version"
            price={239.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71DCZOdq92S._AC_SL1500_.jpg"
          />
          {/* products */}
          <Product
            id={5}
            title="SENNHEISER HD 599 SE Around Ear Open Back Headphone"
            price={319.51}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/818-IGwCTjL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          {/* products */}
          <Product
            id={6}
            title="Apple iPad (10.2-Inch, Wi-Fi, 128GB) - Space Gray (Previous Model) with AppleCare+ Bundle"
            price={486.07}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61nOXT5ckAL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
