import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  headTextTitle,
  headTextTitleSec,
  headTextDesc,
  segmentItems,
  productItems,
} from "../../constants";
import GuestBook from "../../components/GuestBook";

const goToTarget = (id) => {
  const target = document.getElementById(id);
  window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
};

const Home = (props) => {
  return (
    <div>
      <Header onClickItem={goToTarget} />
      <div className="container w-100">
        <section id="home" className="d-flex col align-center p-2em head pv-90 pos-rel">
          <div className="w-50 d-flex col bold text-white text-center align-center">
            <span className="mt-1em text-15">{headTextTitle}</span>
            <span className="mt-05em text-cream text-shadow font-cafeta">{headTextTitleSec}</span>
            <span className="mt-2em text-12 lh-2em">{headTextDesc}</span>
            <button className="self-center bg-green mt-2em br-5 btn-shadow">LEARN MORE</button>
          </div>
        </section>
        <section id="segment" className="d-flex col align-center p-2em segment pos-rel">
          <span className="bold h1 text-cream mt-1em">SEGMENT</span>
          <div className="d-flex row justify-space mt-2em align-center">
            {segmentItems.map((segment, key) => (
              <div className="d-flex col align-center" key={key} style={{order: key+1}}>
                <div className={`hexagon ${segment.bgClass} ${segment.bgColor}`}>
                  <span className="text-white hexagon-icon"><FontAwesomeIcon icon={faLaptop} /></span>
                </div>
                <span className="mt-1em bold text-dark text-center">
                  {segment.title}
                </span>
                <p className="mt-1em bold text-cream text-center w-80">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="products pos-rel align-center pos-rel">
          <div className="d-flex row justify-around pb-2em">
            {productItems.map((product, key) => (
              <div key={key} className={`bold col d-flex justify-space w-30 ${product.containerClass}`} style={{order: key+1}}>
                <ul className="align-center check-list">
                  {product.items.map((item, sKey) => (
                    <li key={sKey}>
                      <span>{item.title}</span>
                      {item.description && (
                        <p className="text-cream ml-1em w-50">
                          {item.description}
                        </p>
                      )}
                      <div className="hr" />
                    </li>
                  ))}
                </ul>
                <div className={`fill-button self-center ${product.bgClass}`}>
                  <span className="text-center">BUTTON</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <GuestBook />
      </div>
      <Footer />
    </div>
  );
};

Home.propTypes = {};

export default Home;
