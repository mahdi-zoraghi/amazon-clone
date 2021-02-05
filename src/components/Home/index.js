import Product from "../Product"

import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={123455}
          title="The Lean Startup: Now Constant Innovation Create"
          price={199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41ZPpp3W6QL.jpg"
        />
        <Product
          id={123456}
          title="The Lean Startup: Now Constant Innovation Create"
          price={98.99}
          rating={3}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_re"
        />
      </div>
      <div className="home__row">
        <Product
          id={123457}
          title="The Lean Startup: Now Constant Innovation Create"
          price={598.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="123455"
          title="The Lean Startup: Now Constant Innovation Create"
          price={23.66}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        <Product
          id={123459}
          title="The Lean Startup: Now Constant Innovation Create"
          price={258.32}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={123466}
          title="The Lean Startup: Now Constant Innovation Create"
          price={785.32}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/41ZPpp3W6QL.jpg"
        />
      </div>
    </div>
  )
}

export default Home
