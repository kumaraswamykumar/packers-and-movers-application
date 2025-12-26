import "../styles/accordion.css";
import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h4>{title}</h4>
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default Accordion;
