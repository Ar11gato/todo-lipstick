import React from "react";

import playBtn from "../assets/play.svg";
import stopBtn from "../assets/stop.svg";

const OutputField = ({
  index,
  text,
  minutes,
  seconds,
  statusName,
  setterStatusName,
}) => {
  const [status, setStatus] = React.useState("output-element active");
  const [check, setCheck] = React.useState(false);

  const handleChangeStatus = () => {
    if (check) {
      setStatus("output-element " + "active");
      setterStatusName({ index: index, statusName: "active" });
    } else {
      setStatus("output-element " + "edit");
      setterStatusName({ index: index, statusName: "edit" });
    }
    setCheck(!check);
  };

  return (
    <li className={status}>
      <div className="text">
        <input
          type="checkbox"
          className="checkbox"
          onClick={handleChangeStatus}
        />
        <span className="span">{text}</span>
      </div>
      <div className="time-panel">
        <img src={playBtn} alt="" className="play-btn" />
        <div className="timer">
          {minutes}:{seconds}
        </div>
        <div className="time-info">a few seconds ago</div>
      </div>
      <div className="buttons">
        <button className="edit-btn" onClick={""}>
          edit
        </button>
        <button className="delete-btn" onClick={() => {}}>
          X
        </button>
      </div>
    </li>
  );
};
export default OutputField;
