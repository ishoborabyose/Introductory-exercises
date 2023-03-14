import React from "react";

const Button = ({ number }) => {
  const handleClick = () => {
    // eslint-disable-next-line
    if (number == 1) {
      alert("you clicked on button 1"); // eslint-disable-next-line
    } else if (number == 2) {
      alert("You clicked on button 2"); // eslint-disable-next-line
    } else if (number == 3) {
      alert("You clicked on button 3");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border border-solid border-black bg-gray-200 mx-auto flex  mt-10"
    >
      Button {number}
    </button>
  );
};

export default Button;
