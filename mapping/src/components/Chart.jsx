const Chart = () => {
  const records = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <ul className="flex flex-col items-center">
      {records.map((record, index) => {
        return <li key={index}>{record}</li>;
      })}
    </ul>
  );
};

export default Chart;
