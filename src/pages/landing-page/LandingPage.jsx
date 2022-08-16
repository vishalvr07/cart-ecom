import React, { useEffect, useState } from "react";
import PauseOnHover from "../../components/slider";
import "./LandingPage.css";
import ProductCard from "../../components/productcard/ProductCard";
import axios from "axios";

function LandingPage() {

  const [data , setData]= useState();

  useEffect(() => {
    axios
      .get("https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json",)
      .then(function (response) {
        setData(response.data);
      });
  }, []);

  return (
    <div className="Landing__page">
      <div className="landing-page-hero">
        <PauseOnHover />
      </div>
      <div className="landing-page-categories">
        <div className="landing-page-category" id="mobile">
          <h1 className="landing-page-heading">Products</h1>
          <div className="cards-home">
            {data && data.map((item, index) => (
              <div className="cards">
                <ProductCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  url={item.imageURL}
                  id={item.id}
                  gender={item.gender}
                  color={item.color}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="treding-section">All Trending Products</div>
     
      </div>
    </div>
  );
}

export default LandingPage;
