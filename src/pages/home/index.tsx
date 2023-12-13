import "./style.css";
import React from "react";
import { SliderMain } from "src/containers";

function Home() {
  return (
    <>
      <SliderMain />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-xl-4">
            <div className="filter">123123123123213123123</div>
          </div>
          <div className="col-12 col-lg-9 col-xl-8">
            <main>
              <div className="row">
                <div className="col-6 col-md-4">
                  <div className="card">123123123123213123123</div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card">123123123123213123123</div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card">123123123123213123123</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
