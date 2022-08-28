import React, { useState } from "react";
import axios from "axios";

const CoffeeData = () => {
  const [post, SetPost] = useState([]);

  const CoffeeData = () => {
    axios.get("https://api.sampleapis.com/coffee/hot").then((response) => {
      SetPost(response.data);
    });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={CoffeeData}>
              CoffeeData
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {post.map((value) => {
            return (
              <div className="col-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={value.image} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <p className="card-text">Ingredients:{value.ingredients}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoffeeData;
