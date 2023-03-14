import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="mt-3 text-base font-medium text-center ">
        you clicked {count} times
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 border border-solid border-black bg-gray-200 mx-auto flex text-sm  mt-10"
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
