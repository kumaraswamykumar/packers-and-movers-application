import { useEffect, useState } from "react";
import { getAllMoves } from "../api/packersApi";
import MoveCard from "../components/MoveCard";
import Loader from "../components/Loader";
import "../styles/home.css";

const Home = () => {
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getAllMoves();
      setMoves(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home-page">
      <h2>Dashboard (30 Moves)</h2>
      <div className="cards-container">
        {moves.map((m) => (
          <MoveCard key={m.estimate_id} data={m} />
        ))}
      </div>
    </div>
  );
};

export default Home;
