import React from "react";

function CardContacto(props) {
  return (
      <div className="card mx-auto" style={{ width: "22rem" }}>
        <img
          src="https://fineartsconference.com/wp-content/uploads/2023/02/image-placeholder-icon-11.png"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fa-solid fa-phone"></i> : {props.phone}
          </li>
          <li className="list-group-item">
            <i className="fa-solid fa-envelope"></i> : {props.email}
          </li>
          <li className="list-group-item">
            <i className="fa-solid fa-location-dot"></i> : {props.address}
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
  );
}

export default CardContacto;
