import HoldingRow from "./HoldingRow";

function HoldingsTable({ data, selected, toggle }) {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Select</th>
          <th>Coin</th>
          <th>Holdings</th>
          <th>Price</th>
          <th>STCG</th>
          <th>LTCG</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <HoldingRow
            key={item.coin}
            item={item}
            selected={selected.includes(item)}
            toggle={toggle}
          />
        ))}
      </tbody>
    </table>
  );
}

export default HoldingsTable;