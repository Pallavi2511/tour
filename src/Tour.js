import React, { useState } from "react";

const Tour = ({ id, info, image, name, price, removeTour }) => {
  const [read, setRead] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setRead(!read)}>
            {read ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
