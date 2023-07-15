import { useState } from "react";
import "./App.css";

function App() {
  const [opentAccordion, setOpenAccordio] = useState<null>(null);
  const handelAccordionClick = (index) => {
    console.log(opentAccordion, index);
    if (index !== opentAccordion) {
      setOpenAccordio(index);
    } else {
      setOpenAccordio(null);
    }
  };
  return (
    <div>
      <div className="accordion__container">
        <div
          className={`accordion__item  ${opentAccordion === 0 ? "open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => handelAccordionClick(0)}
          >
            <p className="accordion__number">01</p>
            <p className="accordion__name">The World's Tallest Building</p>
          </div>

          <div className="accordion__details">
            <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`accordion__item  ${opentAccordion === 1 ? "open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => handelAccordionClick(1)}
          >
            <p className="accordion__number">02</p>
            <p className="accordion__name">
              Famous Inventors and Their Inventions
            </p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                Nikola Tesla, a Serbian-American inventor, is credited with the
                invention of the AC (alternating current) electrical system.
              </li>
              <li>
                Thomas Edison, an American inventor, is credited with the
                invention of the light bulb.
              </li>
              <li>
                Alexander Graham Bell, a Scottish-born American inventor, is
                credited with the invention of the telephone.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`accordion__item  ${opentAccordion === 2 ? "open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => handelAccordionClick(3)}
          >
            <p className="accordion__number">03</p>
            <p className="accordion__name">Largest Deserts in the World</p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                The Sahara Desert, located in Africa, is the largest hot desert
                in the world and covers an area of 9.2 million square kilometers
                (3.6 million square miles).
              </li>
              <li>
                The Antarctic Desert, located in Antarctica, is the largest cold
                desert in the world and covers an area of 14 million square
                kilometers (5.4 million square miles).
              </li>
              <li>
                The Arabian Desert, located in the Middle East, is the
                third-largest desert in the world and covers an area of 2.33
                million square kilometers (900,000 square miles).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
