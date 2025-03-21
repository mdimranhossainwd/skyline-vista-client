import Chart from "react-google-charts";

const options = {
  title: "Sales Over Time",
  curveType: "function",
  legend: { position: "bottom" },
  series: [{ color: "#F43F5E" }],
};

export const SalesChart = ({ data }) => {
  return (
    <>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};
