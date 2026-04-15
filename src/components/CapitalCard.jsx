function CapitalCard({ title, data }) {
    if (!data) return null;
  
    const stcgNet = data.stcg.profits - data.stcg.losses;
    const ltcgNet = data.ltcg.profits - data.ltcg.losses;
    const total = stcgNet + ltcgNet;
  
    return (
      <div style={{ padding: "20px", borderRadius: "10px", background: "#222", color: "#fff" }}>
        <h2>{title}</h2>
  
        <p>STCG Profit: ₹{data.stcg.profits.toFixed(2)}</p>
        <p>STCG Loss: ₹{data.stcg.losses.toFixed(2)}</p>
        <p>STCG Net: ₹{stcgNet.toFixed(2)}</p>
  
        <hr />
  
        <p>LTCG Profit: ₹{data.ltcg.profits.toFixed(2)}</p>
        <p>LTCG Loss: ₹{data.ltcg.losses.toFixed(2)}</p>
        <p>LTCG Net: ₹{ltcgNet.toFixed(2)}</p>
  
        <hr />
  
        <h3>Total: ₹{total.toFixed(2)}</h3>
      </div>
    );
  }
  
  export default CapitalCard;