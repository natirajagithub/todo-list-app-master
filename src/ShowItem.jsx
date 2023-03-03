import React from "react";

const ShowItem = (props) => {
  return (
    <>
      <div className="Item-detail">
        <i
          className="fa-solid fa-circle-xmark"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id)
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ShowItem;
