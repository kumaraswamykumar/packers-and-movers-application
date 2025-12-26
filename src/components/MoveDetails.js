import Accordion from "./Accordion";
import "../styles/movedetails.css";

const MoveDetails = ({ item }) => {

  const from = item.from_address || {};
  const to = item.to_address || {};

  return (
    <div className="details-container">
      <h2 className="details-title">Move Details</h2>

      <div className="details-section">
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> {item.user_name}</p>
        <p><strong>Phone:</strong> {item.mobile}</p>
        <p><strong>Email:</strong> {item.email}</p>
      </div>

      <Accordion title="Addresses">
        <h4>From Address</h4>
        <p>{from.firstName} {from.lastName}</p>
        <p>{from.fromAddress}, {from.fromLocality}</p>
        <p>{from.fromCity}, {from.fromState} - {from.pincode}</p>

        <h4>To Address</h4>
        <p>{to.firstName} {to.lastName}</p>
        <p>{to.toAddress}, {to.toLocality}</p>
        <p>{to.toCity}, {to.toState} - {to.pincode}</p>
      </Accordion>

      <Accordion title="Items">
        {Array.isArray(item.items) ? (
          <ul>
            {item.items.map((i, idx) => (
              <li key={idx}>{i.item_name} — {i.item_count}</li>
            ))}
          </ul>
        ) : (
          <p>No items available</p>
        )}
      </Accordion>

      <Accordion title="Transport & Estimate">
        <p><strong>Transport:</strong> {item.transport?.type}</p>
        <p><strong>Cost:</strong> ₹{item.transport?.cost}</p>
        <p><strong>Total Amount:</strong> ₹{item.total_price}</p>
      </Accordion>
    </div>
  );
};

export default MoveDetails;
