const Chart = () => {
  const record = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <ul className="flex flex-col items-center">
      {record.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default Chart;
