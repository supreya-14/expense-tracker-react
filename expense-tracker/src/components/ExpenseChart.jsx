import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = [
  "#8B5CF6",
  "#3B82F6",
  "#EC4899",
  "#F59E0B",
  "#10B981",
];

function ExpenseChart({ expenses }) {
  const categories = {};

  expenses.forEach((expense) => {
    if (categories[expense.category]) {
      categories[expense.category] += expense.amount;
    } else {
      categories[expense.category] = expense.amount;
    }
  });

  const data = Object.keys(categories).map(
    (key) => ({
      name: key,
      value: categories[key],
    })
  );

  return (
    <div className="chart-card">
      <h3>Expense Overview</h3>

      <div className="chart-wrapper">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>

        <div className="chart-legend">
          {data.map((item, index) => (
            <div
              className="legend-item"
              key={index}
            >
              <span
                className="legend-dot"
                style={{
                  background:
                    COLORS[
                      index %
                        COLORS.length
                    ],
                }}
              ></span>

              <div>
                <strong>{item.name}</strong>
                <p>
                  ₹
                  {item.value.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpenseChart;