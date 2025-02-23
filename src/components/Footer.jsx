import React from "react";

const Footer = ({ setSort }) => {
  const setSorts = (event) => {
    setSort(event);
    // console.log(event);
  };

  return (
    <div className="footer">
      <div className="list-counter">3 items left</div>
      <div className="list-states">
        <button className="all-list" onClick={() => setSort("all")}>
          All
        </button>
        <button className="active-list" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="completed-list" onClick={() => setSort("completed")}>
          Completed
        </button>
      </div>
      <div className="clear-tasks">Clear completed</div>
    </div>
  );
};
export default Footer;
