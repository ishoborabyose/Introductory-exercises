import { useState, useEffect, useCallback } from "react";
import "../App.css";

const Working = () => {
  const [info, setInfo] = useState([]);
  const [url] = useState(
    "https://random-data-api.com/api/users/random_user?size=10"
  );

  const fetchData = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setInfo(data);
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="App bg-[#E1F6DB] py-10  ">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleClick}
          className="text-white text-base leading-7 rounded-lg bg-[#F0003C] px-4 py-3 shadow-md text-center flex mx-auto my-11"
        >
          Fetch Random
        </button>
        <div className="grid grid-cols-2 gap-10">
          {info.map((item, index) => (
            <div className="flip-card">
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-10 flip-card-inner  "
              >
                <img
                  className="flip-card-front"
                  alt="avatar"
                  src={item.avatar}
                />
                <div className="p-4 text-center ">
                  <h1 className="text-lg font-semibold leading-7">
                    {item.first_name}
                  </h1>
                  <p className="text-base font-medium leading-6">
                    {item.employment.title}
                  </p>
                </div>
                <div className="flip-card-back ">More information here</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
