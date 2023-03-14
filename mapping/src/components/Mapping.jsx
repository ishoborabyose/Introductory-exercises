import React from "react";

const Mapping = () => {
  return (
    <ul className="flex flex-col items-center">
      {["dog", "cat", "chicken", "cow", "sheep", "horse"].map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default Mapping;
