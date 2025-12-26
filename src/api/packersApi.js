import axios from "axios";

const BASE_URL =
  "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details";

export const getAllMoves = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data.Customer_Estimate_Flow || [];
  } catch (err) {
    console.error("API ERROR:", err);
    return [];
  }
};
