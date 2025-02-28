import React from "react";
import "./footer.scss";

const Footer = ({ setFilter, items }) => {
  return (
    <div className="footer">
      <div className="list-counter">{items} items left</div>
      <div className="list-states">
        <button className="all-list" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="active-list" onClick={() => setFilter("active")}>
          Active
        </button>
        <button
          className="completed-list"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div className="clear-tasks">Clear completed</div>
    </div>
  );
};
export default Footer;
