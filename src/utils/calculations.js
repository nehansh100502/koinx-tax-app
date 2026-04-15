export function calculateAfterHarvesting(selected, base) {
    let stcg = { ...base.stcg };
    let ltcg = { ...base.ltcg };
  
    selected.forEach((item) => {
      if (item.stcg.gain > 0) {
        stcg.profits += item.stcg.gain;
      } else {
        stcg.losses += Math.abs(item.stcg.gain);
      }
  
      if (item.ltcg.gain > 0) {
        ltcg.profits += item.ltcg.gain;
      } else {
        ltcg.losses += Math.abs(item.ltcg.gain);
      }
    });
  
    return { stcg, ltcg };
  }
  
  export function calculateTotal(gains) {
    const stcgNet = gains.stcg.profits - gains.stcg.losses;
    const ltcgNet = gains.ltcg.profits - gains.ltcg.losses;
    return stcgNet + ltcgNet;
  }