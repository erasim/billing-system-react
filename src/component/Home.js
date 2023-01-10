import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="deshbord">
      <h1>DeshBord</h1>
      {/* 1 */}
      <div className="deshbord-items">
        <div className="card">
          <Link to="./itemList">
            <h3 class="card-title">Items</h3>
          </Link>
          <img
            className="card-img-top"
            src="https://i.ibb.co/WDgRRfF/asim.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="card">
          <h3 class="card-title">Customers</h3>
          <img
            className="card-img-top"
            src="https://i.ibb.co/WDgRRfF/asim.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="card">
          <h3 class="card-title">Supliers</h3>
          <img
            className="card-img-top"
            src="https://i.ibb.co/WDgRRfF/asim.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="card">
          <h3 class="card-title">Invoice</h3>
          <img
            className="card-img-top"
            src="https://i.ibb.co/WDgRRfF/asim.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="card">
          <h3 class="card-title">Sell</h3>
          <img
            className="card-img-top"
            src="https://i.ibb.co/WDgRRfF/asim.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
