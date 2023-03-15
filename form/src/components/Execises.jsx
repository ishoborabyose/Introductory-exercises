const Execises = () => {
  return (
    <div>
      <div className="flex justify-center py-3">
        {[
          "home",
          "exercise1",
          "exercise2",
          "exercise3",
          "exercise4",
          "exercise5",
          "exercise6",
          "exercise7",
          "exercise8",
          "exercise9",
        ].map((item, index) => {
          return (
            <div
              className="underline text-blue-600 border-r-2 px-4 cursor-pointer"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Execises;
