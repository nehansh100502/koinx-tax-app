function HoldingRow({ item, selected, toggle }) {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => toggle(item)}
          />
        </td>
        <td>{item.coin}</td>
        <td>{item.totalHolding}</td>
        <td>₹{item.currentPrice}</td>
        <td>₹{item.stcg.gain.toFixed(2)}</td>
        <td>₹{item.ltcg.gain.toFixed(2)}</td>
      </tr>
    );
  }
  
  export default HoldingRow;