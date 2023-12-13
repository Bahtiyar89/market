import "./style.css";
import React from "react";
import { CCard } from "src/components";
import { SliderMain } from "src/containers";
import Image1 from "src/assets/images/product.png";

function Home() {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "Конфеты Raffaello, 200 грамм, вкусный",
      price: "500",
    },
    {
      id: 2,
      image: Image1,
      title: "Конфеты Raffaello, 200 грамм, вкусный вкусный вкусный",
      price: "400",
    },
    {
      id: 3,
      image: Image1,
      title:
        "Конфеты Raffaello, 200 грамм, вкусный Конфеты Raffaello, 200 грамм, вкусный",
      price: "800",
    },
    {
      id: 4,
      image: Image1,
      title: "Конфеты Raffaello, 200 грамм, вкусный",
      price: "500",
    },
    {
      id: 5,
      image: Image1,
      title: "Конфеты Raffaello, 200 грамм, вкусный, Конфеты Raffaello,",
      price: "900",
    },
  ];

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
                {data.map((d) => (
                  <div className="col-6 col-md-4" key={d.id}>
                    <CCard
                      id={d.id}
                      image={d.image}
                      title={d.title}
                      price={d.price}
                    />
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
