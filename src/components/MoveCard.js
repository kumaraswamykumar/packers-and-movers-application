import "../styles/movecard.css";
import { Link } from "react-router-dom";

const MoveCard = ({ data }) => {

  const from = data.from_address || {};
  const to = data.to_address || {};

  const fromFull = `${from.fromAddress}, ${from.fromLocality}, ${from.fromCity}`;
  const toFull = `${to.toAddress}, ${to.toLocality}, ${to.toCity}`;

  return (
    <Link to={`/move/${data.estimate_id}`} className="move-card">
      <div className="move-header">
        <h3>{data.user_name}</h3>
        <span className="status">{data.status}</span>
      </div>

      <div className="move-row">
        <p><strong>From:</strong> {fromFull}</p>
        <p><strong>To:</strong> {toFull}</p>
      </div>

      <p><strong>Date:</strong> {data.moving_on}</p>
      <p><strong>Distance:</strong> {data.distance} km</p>

      <button className="view-details-btn">View Details</button>
    </Link>
  );
};

export default MoveCard;
