import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Packers & Movers</h2>

      <ul className="sidebar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><a href="#">Bookings</a></li>
        <li><a href="#">Payments</a></li>
        <li><a href="#">Customers</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
