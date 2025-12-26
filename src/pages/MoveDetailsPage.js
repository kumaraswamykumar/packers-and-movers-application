import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMoves } from "../api/packersApi";
import MoveDetails from "../components/MoveDetails";

const MoveDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getAllMoves();
      const found = data.find(m => m.estimate_id === id);
      setItem(found || null);
    };
    load();
  }, [id]);

  if (!item) return <h2 style={{ padding: 20 }}>No details available</h2>;

  return <MoveDetails item={item} />;
};

export default MoveDetailsPage;
