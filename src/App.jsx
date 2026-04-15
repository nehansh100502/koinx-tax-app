import { useEffect, useState } from "react";
import { getHoldings } from "./api/holdings";
import { getCapitalGains } from "./api/gains";
import CapitalCard from "./components/CapitalCard";
import HoldingsTable from "./components/HoldingsTable";
import { calculateAfterHarvesting, calculateTotal } from "./utils/calculations";

function App() {
  const [holdings, setHoldings] = useState([]);
  const [gains, setGains] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getHoldings().then(setHoldings);
    getCapitalGains().then(setGains);
  }, []);

  function toggleSelection(item) {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  }

  if (!gains) return <p>Loading...</p>;

  const base = gains.capitalGains;
  const after = calculateAfterHarvesting(selected, base);

  const preTotal = calculateTotal(base);
  const postTotal = calculateTotal(after);
  const savings = preTotal - postTotal;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tax Loss Harvesting</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <CapitalCard title="Pre Harvesting" data={base} />
        <CapitalCard title="After Harvesting" data={after} />
      </div>

      {savings > 0 && (
        <h3 style={{ color: "green" }}>
          You’re going to save ₹{savings.toFixed(2)}
        </h3>
      )}

      <HoldingsTable
        data={holdings}
        selected={selected}
        toggle={toggleSelection}
      />
    </div>
  );
}

export default App;