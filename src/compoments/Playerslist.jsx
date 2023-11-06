import React from "react";
import Cardplayers from "./Cardplayers";

const Playerslist = ({ data }) => {
  return (
    <div style={{ display: "flex" }}>
      {data.map((el) => (
        <Cardplayers key={el.id} el={el} />
      ))}
    </div>
  );
};

export default Playerslist;
