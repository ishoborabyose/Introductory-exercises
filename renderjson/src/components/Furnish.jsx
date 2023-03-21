import { data } from "./data";

const Furnish = () => {
  return (
    <div className="App flex bg-[#E1F7DD]  h-[100vh] items-center justify-center gap-6">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="p-10  bg-white shadow-md text-center rounded-xl"
          >
            <h3 className="text-3xl leading-9 font-bold text-gray-600 ">
              {item.setup}{" "}
            </h3>
            <p className="text-gray-600 text-lg mt-2"> {item.punchline}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Furnish;
