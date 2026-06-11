import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const ScoreChart = ({
  score,
}) => {
  const data = [
    {
      name: "Score",
      value: score,
    },
    {
      name: "Remaining",
      value: 100 - score,
    },
  ];

  return (
    <PieChart
      width={400}
      height={300}
    >
      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
      />

      <Tooltip />
    </PieChart>
  );
};

export default ScoreChart;