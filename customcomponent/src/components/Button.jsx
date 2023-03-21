const Button = ({ number }) => {
  const handleClick = (event) => {
    event.preventDefault();
    alert("You clicked on button" + number);
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
